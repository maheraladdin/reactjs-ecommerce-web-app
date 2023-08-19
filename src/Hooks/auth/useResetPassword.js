import {useState} from "react";
import useNotify from "../useNotify";
import {useDispatch} from "react-redux";
import {resetPassword} from "../../Redux/Actions/userActions";
import baseURL from "../../Api/BaseURL";
import {useNavigate} from "react-router-dom";
import {verifyPasswordResetTokenRoute} from "../../constants/routes";

export default function useResetPassword() {
    const [email, setEmail] = useState('');
    const [validated, setValidated] = useState(false);

    const notify = useNotify();
    const navigate = useNavigate();

    const dispatch = useDispatch();

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        setValidated(true);
        if(!email) return notify('Email is required', 'error');

        // save email in redux
        dispatch(resetPassword(email));

        // send reset code to email
        try {
            const payload = await baseURL.post('/auth/forgetPassword', {email});
            notify(payload.massage, 'success');
            setTimeout(() => {
                navigate(verifyPasswordResetTokenRoute);
            });
        } catch (e) {
            if(e && e.response && e.response.data && e.response.data.errors) {
                for(let error of e.response.data.errors) {
                    notify(error.msg, 'error');
                }
            }
            if(e && e.response && e.response.data) {
                notify(e.response.data, 'error');
            }
        }


    }

    return {
        email,
        handleEmailChange,
        validated,
        handleSubmit,
    }
}
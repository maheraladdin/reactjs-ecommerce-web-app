import {useState} from "react";
import useNotify from "../useNotify";
import {useDispatch} from "react-redux";
import {resetPassword} from "../../Redux/Actions/userActions";
import baseURL from "../../Api/BaseURL";
import {useNavigate} from "react-router-dom";
import {verifyPasswordResetTokenRoute} from "../../constants/routes";
import {toast} from "react-toastify";
import {GET_ERROR} from "../../Redux/Types/errorType";

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
            notify(payload.data.massage, 'success');
            if(payload.status.toString().startsWith("2")) navigate(verifyPasswordResetTokenRoute);
        } catch (e) {
            if(e?.response?.data?.errors) {
                for (let error of e.response.data.errors) {
                    toast.error(error.msg);
                }
            }
            else if(e?.response?.data?.message) {
                toast.error(e.response.data.message);
            }
            else if(e?.response?.data) {
                toast.error(e.response.data);
            }
            // dispatch the error to redux
            dispatch({
                type: GET_ERROR,
                error: e,
                status: e?.response?.status,
            });
        }


    }

    return {
        email,
        handleEmailChange,
        validated,
        handleSubmit,
    }
}
import {useState} from "react";
import useNotify from "../useNotify";
import {useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {resetForgottenPassword} from "../../Redux/Actions/userActions";

export default function useResetForgottenPassword() {
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [validated, setValidated] = useState(false);

    const notify = useNotify();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const userReducer = useSelector(state => state.userReducer);
    const {resetPasswordByEmail, status} = userReducer;


    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    }

    const handleConfirmPasswordChange = (e) => {
        setConfirmPassword(e.target.value);
    }

    const handleSubmit = async (e) => {
    e.preventDefault();
        setValidated(true);

        if(!password) return notify('Password is required', 'error');
        if(!confirmPassword) return notify('Confirm Password is required', 'error');
        if(password !== confirmPassword) return notify('Passwords do not match', 'error');

        // reset password
        await dispatch(resetForgottenPassword({
            body: {
                password,
                email: resetPasswordByEmail,
                passwordConfirmation: confirmPassword,
            }
        }))
        if(status.toString().startsWith("2")) navigate("/");
    }

    return {
        password,
        confirmPassword,
        handlePasswordChange,
        handleConfirmPasswordChange,
        validated,
        handleSubmit
    }
}
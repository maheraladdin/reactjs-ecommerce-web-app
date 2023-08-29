import {useState} from "react";
import useNotify from "../useNotify";
import {useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {login} from "../../Redux/Actions/userActions";

export default function useLogin() {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [rememberMe, setRememberMe] = useState(false);
    const [validated, setValidated] = useState(false);

    const notify = useNotify();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const status = useSelector(state => state.userReducer.status);


    /**
     * @description Handle change email
     * @param {Object} e - change event object
     */
    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    }

    /**
     * @description Handle change password
     * @param {Object} e - change event object
     */
    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    }

    /**
     * @description Handle change remember me
     * @param {Object} e - change event object
     */
    const handleRememberMeChange = (e) => {
        setRememberMe(e.target.checked);
    }

    /**
     * @description Request login
     * @return {Promise<void>}
     */
    const requestLogin = async () => {
        await dispatch(login({
            body: {
                email,
                password,
            },
            config: {
                headers: {
                    'remember-me': rememberMe,
                }
            }
        }));
        if(status === 200) navigate('/');
    }

    /**
     * @description Handle submit form
     * @param {Event} event - event submit
     * @return {Promise<void>}
     */
    const handleSubmit = async (event) => {
        event.preventDefault();
        // validate form
        setValidated(true);
        if(!email) return notify('Email is required', 'error');
        if(!password) return notify('Password is required', 'error');
        await requestLogin();
        }

    return {
        email,
        password,
        rememberMe,
        handleEmailChange,
        handlePasswordChange,
        handleRememberMeChange,
        handleSubmit,
        validated
    }
}
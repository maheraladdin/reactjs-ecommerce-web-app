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

    const token = useSelector(state => state.userReducer.token);
    const tokenExpireAt = useSelector(state => state.userReducer.tokenExpireAt);

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
     * @description Form validation
     * @return {number|string|*}
     */
    const formValidation = () => {
        setValidated(true);
        if(!email) return notify('Email is required', 'error');
        if(!password) return notify('Password is required', 'error');
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

        document.cookie = `token=${token};`;
        document.cookie = `expires=${tokenExpireAt};`;
        navigate("/");
    }

    /**
     * @description Handle submit form
     * @param {Event} event - event submit
     * @return {Promise<void>}
     */
    const handleSubmit = async (event) => {
        event.preventDefault();
        formValidation();
        try {
            await requestLogin();
        } catch (e) {
            if(e && e.response && e.response.data && e.response.data.errors) {
                for (let error of e.response.data.errors) {
                    notify(error.msg, 'error');
                }
            }
            else if(e && e.response && e.response.data && e.response.data.message) {
                notify(e.response.data.message, 'error');
            }
            else if(e && e.response && e.response.data) {
                notify(e.response.data, 'error');
            }

            }

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
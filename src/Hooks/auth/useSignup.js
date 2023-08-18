import {useState} from "react";
import baseURL from "../../Api/BaseURL";
import useNotify from "../useNotify";
import {useNavigate} from "react-router-dom";

export default function useSignup() {
    const [username, setUsername] = useState();
    const [email, setEmail] = useState();
    const [phoneNumber, setPhoneNumber] = useState();
    const [password, setPassword] = useState();
    const [passwordConfirmation, setPasswordConfirmation] = useState();
    const [rememberMe, setRememberMe] = useState(false);
    const [validated, setValidated] = useState(false);

    const notify = useNotify();
    const navigate = useNavigate();

    /**
     * @description Handle change username
     * @param {Object} event - change event object
     */
    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
    }

    /**
     * @description Handle change email
     * @param {Object} event - change event object
     */
    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    }

    /**
     * @description Handle change phone number
     * @param {Object} event - change event object
     */
    const handlePhoneNumberChange = (event) => {
        setPhoneNumber(event.target.value);
    }

    /**
     * @description Handle change password
     * @param {Object} event - change event object
     */
    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    }

    /**
     * @description Handle change password confirmation
     * @param {Object} event - change event object
     */
    const handlePasswordConfirmationChange = (event) => {
        setPasswordConfirmation(event.target.value);
    }

    /**
     * @description Handle change remember me
     * @param {Object} event - change event object
     */
    const handleRememberMeChange = (event) => {
        setRememberMe(event.target.checked);
    }

    /**
     * @description Form validation
     * @return {number|string|*}
     */
    const formValidation = () => {
        setValidated(true);
        if(!username) return notify('Username is required', 'error');
        if(!email) return notify('Email is required', 'error');
        if(phoneNumber && phoneNumber.length <= 10) return notify('Phone number must be at least 10 characters', 'error');
        if(!password) return notify('Password is required', 'error');
        if(!passwordConfirmation) return notify('Password confirmation is required', 'error');
        if(password !== passwordConfirmation) return notify('Password do not match password confirmation', 'error');
    }

    /**
     * @description Request signup
     * @return {Promise<void>}
     */
    const requestSignup = async () => {
        const payload = await baseURL.post('/auth/signup', {
            name: username,
            email,
            password,
            passwordConfirmation,
        }, {
            headers: {
                'remember-me': rememberMe,
            }
        });
        document.cookie = `token=${payload.data.token};`;
        navigate("/");
    }

    /**
     * @description Handle submit
     * @param {Event} event - event submit
     * @return {Promise<void>}
     */
    const handleSubmit = async (event) => {
        event.preventDefault();
        formValidation();
        try {
             await requestSignup();
        }
        catch (e) {
            document.cookie = ``;
            if(e && e.response && e.response.data && e.response.data.errors) {
                for (let error of e.response.data.errors) {
                    notify(error.msg, 'error');
                }
            }
            else if(e && e.response && e.response.data) {
                notify(e.response.data, 'error');
            }
        }

    }

    return {
        username,
        handleUsernameChange,
        email,
        handleEmailChange,
        phoneNumber,
        handlePhoneNumberChange,
        password,
        handlePasswordChange,
        passwordConfirmation,
        handlePasswordConfirmationChange,
        rememberMe,
        handleRememberMeChange,
        validated,
        handleSubmit,
    }
}
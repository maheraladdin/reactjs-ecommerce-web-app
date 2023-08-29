import {useState} from "react";
import useNotify from "../useNotify";
import {useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {signup} from "../../Redux/Actions/userActions";

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
    const dispatch = useDispatch();
    const status = useSelector(state => state.userReducer.status);

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
     * @description Request signup
     * @return {Promise<void>}
     */
    const requestSignup = async () => {
        await dispatch(signup({
            body: {
                name: username,
                email,
                password,
                passwordConfirmation,
            },
            config: {
                headers: {
                    'remember-me': rememberMe,
                }
            }
        }));
        if(status.toString().startsWith("2")) navigate('/');
    }

    /**
     * @description Handle submit
     * @param {Event} event - event submit
     * @return {Promise<void>}
     */
    const handleSubmit = async (event) => {
        event.preventDefault();

        // validate form
        setValidated(true);
        if(!username) return notify('Username is required', 'error');
        if(!email) return notify('Email is required', 'error');
        if(phoneNumber && phoneNumber.length <= 10) return notify('Phone number must be at least 10 characters', 'error');
        if(!password) return notify('Password is required', 'error');
        if(!passwordConfirmation) return notify('Password confirmation is required', 'error');
        if(password !== passwordConfirmation) return notify('Password do not match password confirmation', 'error');

        await requestSignup();
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
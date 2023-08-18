import {useState} from "react";
import baseURL from "../../Api/BaseURL";
import useNotify from "../useNotify";

export default function useSignup() {
    const [username, setUsername] = useState();
    const [email, setEmail] = useState();
    const [phoneNumber, setPhoneNumber] = useState();
    const [password, setPassword] = useState();
    const [passwordConfirmation, setPasswordConfirmation] = useState();
    const [rememberMe, setRememberMe] = useState(false);
    const [validated, setValidated] = useState(false);

    const notify = useNotify();


    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
    }

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    }

    const handlePhoneNumberChange = (event) => {
        setPhoneNumber(event.target.value);
    }

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    }

    const handlePasswordConfirmationChange = (event) => {
        setPasswordConfirmation(event.target.value);
    }

    const handleRememberMeChange = (event) => {
        setRememberMe(event.target.checked);
    }

    // TODO: Finish this function
    const handleSubmit = async (event) => {
        event.preventDefault();
        setValidated(true);

        if(!username) return notify('Username is required', 'error');
        if(!email) return notify('Email is required', 'error');
        if(!password) return notify('Password is required', 'error');
        if(!passwordConfirmation) return notify('Password confirmation is required', 'error');
        if(password !== passwordConfirmation) return notify('Password do not match password confirmation', 'error');
        try {

             const payload = await baseURL.post('/auth/signup', {
                name: username,
                email: email,
                password: password,
                passwordConfirmation: passwordConfirmation,
            }, {
                headers: {
                    'remember-me': rememberMe,
                }
            });

            const oneDay = 1000 * 60 * 60 * 24;
            const thirtyDays = oneDay * 30;

            const expiresAt = rememberMe ?
                new Date().getTime() + thirtyDays - 10000 :
                new Date().getTime() + oneDay - 10000;

            document.cookie = `token=${payload.data.token}; expires=${new Date(expiresAt)}; path=/;`;
        }
        catch (e) {
            notify(e?.response?.data[0]?.msg, 'error');
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
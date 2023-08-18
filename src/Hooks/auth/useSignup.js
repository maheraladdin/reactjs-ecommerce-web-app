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

    const formValidation = () => {
        setValidated(true);
        if(!username) return notify('Username is required', 'error');
        if(!email) return notify('Email is required', 'error');
        if(phoneNumber && phoneNumber.length <= 10) return notify('Phone number must be at least 10 characters', 'error');
        if(!password) return notify('Password is required', 'error');
        if(!passwordConfirmation) return notify('Password confirmation is required', 'error');
        if(password !== passwordConfirmation) return notify('Password do not match password confirmation', 'error');
    }

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

    const handleSubmit = async (event) => {
        event.preventDefault();
        formValidation();
        try {
             await requestSignup();
        }
        catch (e) {
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
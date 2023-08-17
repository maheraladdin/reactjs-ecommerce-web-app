import {useState} from "react";

export default function useSignup() {
    const [username, setUsername] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [passwordConfirmation, setPasswordConfirmation] = useState();
    const [rememberMe, setRememberMe] = useState(false);
    const [validated, setValidated] = useState(false);


    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
    }

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
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

    const handleSubmit = (event) => {
        event.preventDefault();
        setValidated(true);

    }

    return {
        username,
        handleUsernameChange,
        email,
        handleEmailChange,
        password,
        handlePasswordChange,
        passwordConfirmation,
        handlePasswordConfirmationChange,
        rememberMe,
        handleRememberMeChange,
        validated,
    }
}
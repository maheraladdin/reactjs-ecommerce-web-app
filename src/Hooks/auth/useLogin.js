import {useState} from "react";
import useNotify from "../useNotify";
import baseURL from "../../Api/BaseURL";
import {useNavigate} from "react-router-dom";

export default function useLogin() {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [rememberMe, setRememberMe] = useState(false);
    const [validated, setValidated] = useState(false);

    const notify = useNotify();
    const navigate = useNavigate();

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    }

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    }

    const handleRememberMeChange = (e) => {
        setRememberMe(e.target.checked);
    }

    const formValidation = () => {
        setValidated(true);
        if(!email) return notify('Email is required', 'error');
        if(!password) return notify('Password is required', 'error');
    }

    const requestLogin = async () => {
        const payload = await baseURL.post('/auth/login', {
            email,
            password,
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
import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import useNotify from "../useNotify";
import {updateLoggedUserPassword} from "../../Redux/Actions/userActions";

export default function useUpdateLoggedUserPassword() {
    const dispatch = useDispatch();
    const notify = useNotify();
    const token = useSelector(state => state.userReducer.token);

    // form states
    const [loading, setLoading] = useState(false);
    const [validated, setValidated] = useState(false);

    // form data
    const [currentPassword, setCurrentPassword] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirmation, setPasswordConfirmation] = useState("");

    // form data handlers
    const handleCurrentPassword = (e) => setCurrentPassword(e.target.value);
    const handlePassword = (e) => setPassword(e.target.value);
    const handlePasswordConfirmation = (e) => setPasswordConfirmation(e.target.value);

    // form submit
    const updateLoggedUserPasswordHandler = async () => {
        if(!token) return;

        setValidated(true);
        if(!currentPassword) return notify("Current password is required", "error");
        if(!password) return notify("New Password is required", "error");
        if(!passwordConfirmation) return notify("Password confirmation is required", "error");

        setLoading(true);
        await dispatch(updateLoggedUserPassword({
            body: {
                currentPassword,
                password,
                passwordConfirmation
            },
            config: {
                headers: {
                    "Authorization": `Bearer ${token}`,
                }
            }
        }));
        setLoading(false);
        setValidated(false);
    }

    useEffect(() => {
        if(loading) return;
        setCurrentPassword("");
        setPassword("");
        setPasswordConfirmation("");
    },[loading]);

    return {
        loading,
        validated,
        currentPassword,
        handleCurrentPassword,
        password,
        handlePassword,
        passwordConfirmation,
        handlePasswordConfirmation,
        updateLoggedUserPasswordHandler
    }
}
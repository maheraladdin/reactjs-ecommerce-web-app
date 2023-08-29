import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {updateLoggedUserData} from "../../Redux/Actions/userActions";

export default function useUpdateLoggedUser() {
    const dispatch = useDispatch();
    const userReducer = useSelector(state => state.userReducer);
    const {token, user} = userReducer;

    // form states
    const [loading, setLoading] = useState(false);

    // form data
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");

    // form data handlers
    const handleName = (e) => setName(e.target.value);
    const handleEmail = (e) => setEmail(e.target.value);
    const handlePhone = (e) => setPhone(e.target.value);

    // form submit
    const updateLoggedUser = async () => {
        if(!token) return;
        setLoading(true);

        const body = {};
        if(name && user.name !== name) body.name = name;
        if(email && user.email !== email) body.email = email;
        if(phone && user?.phone !== phone) body.phone = phone;

        await dispatch(updateLoggedUserData({
            body,
            config: {
                headers: {
                    "Authorization": `Bearer ${token}`,
                }
            }
        }));
        setLoading(false);
    }

    useEffect(() => {
        if(!user) return;
        if(!token) return;
        setName(user.name);
        setEmail(user.email);
        setPhone(user.phone);
    },[user, token]);

    return {
        loading,
        name,
        email,
        phone,
        handleName,
        handleEmail,
        handlePhone,
        updateLoggedUser,
    }

}
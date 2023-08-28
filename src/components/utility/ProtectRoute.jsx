import {useSelector} from "react-redux";
import {Navigate} from "react-router-dom";
import {loginRoute} from "../../constants/routes";
import LoadingPage from "../../pages/status/LoadingPage";
import {useEffect, useState} from "react";

export default function ProtectRoute({children, role}) {
    const userReducer = useSelector(state => state.userReducer);
    const {user} = userReducer;
    const tokenFromCookie = document.cookie.split(";").find(cookie => cookie.includes("token")).trim().split("=")[1];
    const [isLogged, setIsLogged] = useState(false);

    useEffect(() => {
        if(Object.keys(user).length > 0) setIsLogged(true);
    },[user])

    // scenarios:
    // 1. there is no token in cookie
    // 2. there is a token in cookie ,and user.role === user
    // 3. there is a token in cookie ,and user.role === admin
    // 4. there is a token in cookie ,and user.role === admin, but the route is for user
    // 5. there is a token in cookie ,and user.role === user, but the route is for admin

    if(tokenFromCookie.length > 0) {
        return !isLogged ? <LoadingPage /> : user?.role === role ? children : <Navigate to={loginRoute} />;
    } else {
        return <Navigate to={loginRoute} />;
    }

}
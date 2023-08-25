import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getLoggedUserData, logout, setToken} from "../../Redux/Actions/userActions";

export default function useGetLoggedUser() {
    const dispatch = useDispatch();

    const [isLogin, setIsLogin] = useState(false);
    const [tokenLoaded, setTokenLoaded] = useState(false);

    const userReducer = useSelector(state => state.userReducer);
    const {user, token, tokenExpireAt} = userReducer;

    const onClickLogout = () => {
        dispatch(logout());
        setIsLogin(false);
    }

    // isLogged
    useEffect(() => {
        let tokenFromCookie;
        let tokenExpireAtFromCookie;
        if(token) {
            setIsLogin(true)
        }
        if(!token) {
            if(!document.cookie) {
                return setIsLogin(false);
            }
            else {
                // get expire date from cookie
                tokenExpireAtFromCookie = document.cookie.split(";").find(cookie => cookie.includes("expires")).trim().split("=")[1];
                // check if expire date exists
                if(!tokenExpireAtFromCookie) return setIsLogin(false);
                // check if token is expired
                if(new Date(tokenExpireAtFromCookie).getTime() <= new Date().getTime()) return setIsLogin(false);
                // get token from cookie
                tokenFromCookie = document.cookie.split(";").find(cookie => cookie.includes("token")).trim().split("=")[1];
                // check if token exists
                if(!tokenFromCookie) return setIsLogin(false);
            }
        }
        if(!token && !tokenExpireAt) dispatch(setToken(tokenFromCookie, tokenExpireAtFromCookie));
        setTokenLoaded(true);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[user]);

    useEffect(() => {
        (async () => {
            if(!tokenLoaded) return;
            if(!token) return;
            if(Object.keys(user).length > 0) return;
            await dispatch(getLoggedUserData({
                body: {
                    headers: {
                        "Authorization": `Bearer ${token}`,
                    }
                }
            }));
            setIsLogin(true);
        })()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[tokenLoaded]);


    return {
        isLogin,
        user,
        onClickLogout
    }
}
import {
    GET_LOGGED_USER_DATA,
    UPDATE_LOGGED_USER_DATA,
    UPDATE_LOGGED_USER_PASSWORD,
} from "../Types/userTypes";
import {
    SIGNUP,
    LOGIN,
    LOGOUT,
    SET_TOKEN,
    RESET_PASSWORD,
    RESET_FORGOTTEN_PASSWORD
} from "../Types/authTypes";
import reduxApi from "../logic/reduxApi";

// auth actions

/**
 * @desc    login user from API
 * @param   {Object} params - login params
 * @return  {(function(*): Promise<void>)|*}
 */
export const login = params => reduxApi("post", "/auth/login", params,
    (dispatch, payload) => {
        const tokenExpireAt = new Date(params.config.headers['remember-me'] ? new Date().getTime() + 1000 * 60 * 60 * 24 * 30 : new Date().getTime() + 1000 * 60 * 60 * 24);
        dispatch({
            type: LOGIN,
            payload: {
                user: payload.data.data.user,
                token: payload.data.token,
                tokenExpireAt: tokenExpireAt.toUTCString(),
            }
        });
    });

/**
 * @desc    signup user from API
 * @param  {Object} params - signup params
 * @param  {Object} params.body - signup body params
 * @param  {Object} params.config - signup config params
 * @param  {Object} params.config.headers - signup headers params
 * @return {(function(*): Promise<void>)|*}
 */
export const signup = params => reduxApi("post", "/auth/signup", params,
    (dispatch, payload) => {
        const tokenExpireAt = new Date(params.config.headers['remember-me'] ? new Date().getTime() + 1000 * 60 * 60 * 24 * 30 : new Date().getTime() + 1000 * 60 * 60 * 24);
        dispatch({
            type: SIGNUP,
            payload: {
                user: payload.data.document,
                token: payload.data.token,
                tokenExpireAt: tokenExpireAt.toUTCString(),
            }
        });
    });

/**
 * @desc    logout user from API
 * @return  {(function(*): Promise<void>)|*}
 */
export const logout = () => {
    return {
        type: LOGOUT,
    }
}

export const setToken = (tokenFromCookie, tokenExpireAtFromCookie) => {
    return {
        type: SET_TOKEN,
        payload: {
            token: tokenFromCookie,
            tokenExpireAt: tokenExpireAtFromCookie.toString(),
        }
    }
}

export const resetPassword = email => {
    return {
        type: RESET_PASSWORD,
        payload: {
            resetPasswordByEmail: email,
        }
    }
};

export const resetForgottenPassword = params => reduxApi("patch", "/auth/resetPassword", params,
    (dispatch, payload) => {
        const tokenExpireAt = new Date(new Date().getTime() + 1000 * 60 * 60 * 24);
        dispatch({
            type: RESET_FORGOTTEN_PASSWORD,
            payload: {
                token: payload.data.token,
                tokenExpireAt: tokenExpireAt.toUTCString(),
            }
        });
    });


// user actions

/**
 * @desc    get logged user data from API
 * @param   {Object} params - get logged user data params
 * @param   {Object} params.body - get logged user data body params
 * @param   {Object} params.config - get logged user data config params
 * @param   {Object} params.config.headers - get logged user data headers params
 * @return  {(function(*): Promise<void>)|*}
 */
export const getLoggedUserData = (params) => reduxApi("get", "/users/loggedUser", params,
    (dispatch, payload) => {
        dispatch({
            type: GET_LOGGED_USER_DATA,
            payload: {
                user: payload.data.document,
            }
        });
    });

/**
 * @desc update logged user data from API
 * @param params
 * @param params.body
 * @param params.config
 * @param params.config.headers
 * @param params.config.headers.Authorization
 * @return {(function(*): Promise<void>)|*}
 */
export const updateLoggedUserData = params => reduxApi("put", "/users/updateLoggedUserData", params,
    (dispatch, payload) => {
        dispatch({
            type: UPDATE_LOGGED_USER_DATA,
            payload: {
                user: payload.data.document,
            }
        });
    });

/**
 * @desc update logged user password from API
 * @param params
 * @param params.body
 * @param params.config
 * @param params.config.headers
 * @param params.config.headers.Authorization
 * @return {(function(*): Promise<void>)|*}
 */
export const updateLoggedUserPassword = params => reduxApi("patch", "/users/changeLoggedUserPassword", params,
    (dispatch, payload) => {
        const tokenExpireAt = new Date(new Date().getTime() + 1000 * 60 * 60 * 24);
        dispatch({
            type: UPDATE_LOGGED_USER_PASSWORD,
            payload: {
                user: payload.data.document,
                token: payload.data.token,
                tokenExpireAt: tokenExpireAt.toUTCString(),
            }
        });
    });

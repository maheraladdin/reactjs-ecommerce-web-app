import {SIGNUP, LOGIN, LOGOUT, GET_LOGGED_USER_DATA, CREAT_CSRF_TOKEN} from "../Types/userTypes";
import reduxApi from "../logic/reduxApi";

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

/**
 * @desc    get logged user data from API
 * @param   {Object} params - get logged user data params
 * @param   {Object} params.body - get logged user data body params
 * @param   {Object} params.config - get logged user data config params
 * @param   {Object} params.config.headers - get logged user data headers params
 * @return  {(function(*): Promise<void>)|*}
 */
export const getLoggedUserData = (params) => reduxApi("get", "/auth/login", params,
    (dispatch, payload) => {
        dispatch({
            type: GET_LOGGED_USER_DATA,
            payload: {
                user: payload.data.document,
            }
        });
    });

/**
 * @desc    create csrf token from API
 * @param   {Object} params - create csrf token params
 * @param   {Object} params.body - create csrf token body params
 * @param   {Object} params.config - create csrf token config params
 * @param   {Object} params.config.headers - create csrf token headers params
 * @return  {(function(*): Promise<void>)|*}
 */
export const createCsrfToken = (params) => reduxApi("get", "/auth/createCsrfToken", params,
    (dispatch, payload) => {
        dispatch({
            type: CREAT_CSRF_TOKEN,
            payload: {
                csrfToken: payload.headers["csrf-token"],
            }
        });
    });

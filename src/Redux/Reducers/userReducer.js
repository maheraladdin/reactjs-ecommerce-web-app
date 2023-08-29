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

const initialState = {
    user: {},
    token: '',
    tokenExpireAt: '',
    resetPasswordByEmail: '',
    status: 0,
}
export default function userReducer(state = initialState, action) {
    switch (action.type) {
        // auth reducer
        case LOGIN:
            document.cookie = `token=${action.payload.token}; expires=${action.payload.tokenExpireAt}; path=/;`;
            document.cookie = `expires=${action.payload.tokenExpireAt}; expires=${action.payload.tokenExpireAt}; path=/;`;
            return {
                ...state,
                user: action.payload.user,
                token: action.payload.token,
                tokenExpireAt: action.payload.tokenExpireAt,
                status: action.payload.status,
            }
        case SIGNUP:
            document.cookie = `token=${action.payload.token}; expires=${action.payload.tokenExpireAt}; path=/;`;
            document.cookie = `expires=${action.payload.tokenExpireAt}; expires=${action.payload.tokenExpireAt}; path=/;`;
            return {
                ...state,
                user: action.payload.user,
                token: action.payload.token,
                tokenExpireAt: action.payload.tokenExpireAt,
                status: action.payload.status,
            }
        case LOGOUT:
            document.cookie = `token=; expires=; path=/;`;
            document.cookie = `expires=; expires=; path=/;`;
            return initialState;
        case SET_TOKEN:
            return {
                ...state,
                token: action.payload.token,
                tokenExpireAt: action.payload.tokenExpireAt,
                status: action.payload.status,
            }
        case RESET_PASSWORD:
            return {
                ...state,
                resetPasswordByEmail: action.payload.resetPasswordByEmail,
                status: action.payload.status,
            }
        case RESET_FORGOTTEN_PASSWORD:
            document.cookie = `token=${action.payload.token}; expires=${action.payload.tokenExpireAt}; path=/;`;
            document.cookie = `expires=${action.payload.tokenExpireAt}; expires=${action.payload.tokenExpireAt}; path=/;`;
            return {
                ...state,
                token: action.payload.token,
                tokenExpireAt: action.payload.tokenExpireAt,
                status: action.payload.status,
            }
        // user reducer
        case GET_LOGGED_USER_DATA:
            return {
                ...state,
                user: action.payload.user,
                status: action.payload.status,
            }
        case UPDATE_LOGGED_USER_DATA:
            return {
                ...state,
                user: action.payload.user,
                status: action.payload.status,
            }
        case UPDATE_LOGGED_USER_PASSWORD:
            document.cookie = `token=${action.payload.token}; expires=${action.payload.tokenExpireAt}; path=/;`;
            document.cookie = `expires=${action.payload.tokenExpireAt}; expires=${action.payload.tokenExpireAt}; path=/;`;
            return {
                ...state,
                user: action.payload.user,
                token: action.payload.token,
                tokenExpireAt: action.payload.tokenExpireAt,
                status: action.payload.status,
            }
        default:
            return state;
    }
}
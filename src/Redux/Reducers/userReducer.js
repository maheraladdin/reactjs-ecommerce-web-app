import {
    SIGNUP,
    LOGIN,
    LOGOUT,
    GET_LOGGED_USER_DATA,
    SET_TOKEN,
    RESET_PASSWORD,
    RESET_FORGOTTEN_PASSWORD
} from "../Types/userTypes";

const initialState = {
    user: {},
    token: '',
    tokenExpireAt: '',
    resetPasswordByEmail: '',
}
export default function userReducer(state = initialState, action) {
    switch (action.type) {
        case LOGIN:
            document.cookie = `token=${action.payload.token};`;
            document.cookie = `expires=${action.payload.tokenExpireAt};`;
            return {
                ...state,
                user: action.payload.user,
                token: action.payload.token,
                tokenExpireAt: action.payload.tokenExpireAt,
            }
        case SIGNUP:
            document.cookie = `token=${action.payload.token};`;
            document.cookie = `expires=${action.payload.tokenExpireAt};`;
            return {
                ...state,
                user: action.payload.user,
                token: action.payload.token,
                tokenExpireAt: action.payload.tokenExpireAt,
            }
        case LOGOUT:
            document.cookie = `token=;`;
            document.cookie = `expires=;`;
            return initialState;
        case GET_LOGGED_USER_DATA:
            return {
                ...state,
                user: action.payload.user,
            }
        case SET_TOKEN:
            return {
                ...state,
                token: action.payload.token
            }
        case RESET_PASSWORD:
            return {
                ...state,
                resetPasswordByEmail: action.payload.resetPasswordByEmail
            }
        case RESET_FORGOTTEN_PASSWORD:
            document.cookie = `token=${action.payload.token};`;
            document.cookie = `expires=${action.payload.tokenExpireAt};`;
            return {
                ...state,
                token: action.payload.token,
            }
        default:
            return state;
    }
}
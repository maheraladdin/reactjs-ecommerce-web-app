import {SIGNUP, LOGIN, LOGOUT, GET_LOGGED_USER_DATA, CREAT_CSRF_TOKEN} from "../Types/userTypes";

const initialState = {
    user: {},
    token: '',
    tokenExpireAt: '',
    csrfToken: '',
}
export default function userReducer(state = initialState, action) {
    switch (action.type) {
        case LOGIN:
            return {
                ...state,
                user: action.payload.user,
                token: action.payload.token,
                tokenExpireAt: action.payload.tokenExpireAt,
            }
        case SIGNUP:
            return {
                ...state,
                user: action.payload.user,
                token: action.payload.token,
                tokenExpireAt: action.payload.tokenExpireAt,
            }
        case LOGOUT:
            return initialState;
        case GET_LOGGED_USER_DATA:
            return {
                ...state,
                user: action.payload.user,
            }
        case CREAT_CSRF_TOKEN:
            return {
                ...state,
                csrfToken: action.payload.csrfToken,
            }
        default:
            return state;
    }
}
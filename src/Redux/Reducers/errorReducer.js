import {GET_ERROR, CLEAR_ERROR} from "../Types/errorType";

const initialState = {
    error: {},
    status: 0,
}
export default function errorReducer(state = initialState, action) {
    switch (action.type) {
        case GET_ERROR:
            return {
                ...state,
                error: action.error,
                status: action.error && action.error.response && action.error.response.status,
            }
            case CLEAR_ERROR:
                return initialState;
        default:
            return state;
    }
}
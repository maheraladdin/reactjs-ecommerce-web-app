import {CREATE_CATEGORY, GET_CATEGORIES, GET_ERROR} from "../Types/categoryType";

const initialState = {
    categories: [],
    loading: true,
    numberOfPages: 0,
}
export default function categoryReducer(state = initialState, action) {
    switch (action.type) {
        case GET_CATEGORIES:
            return {
                ...state,
                categories: action.payload.categories,
                loading: false,
                numberOfPages: action.payload.numberOfPages,
                status: action.payload.status,
            }
        case CREATE_CATEGORY:
            return {
                ...state,
                category: action.payload.category,
                loading: false,
                status: action.payload.status,
            }
        case GET_ERROR:
            return {
                ...state,
                loading: true,
                error: action.error,
                status: action.error.response.status,
            }
        default:
            return state;
    }
}
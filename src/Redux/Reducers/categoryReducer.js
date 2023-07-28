import {GET_CATEGORIES, GET_ERROR} from "../Types/categoryType";

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
            }
        case GET_ERROR:
            return {
                ...state,
                loading: true,
                categories: action.payload,
            }
        default:
            return state;
    }
}
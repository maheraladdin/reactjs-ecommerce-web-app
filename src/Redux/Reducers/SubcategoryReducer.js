import {
    GET_SUBCATEGORIES,
    CREATE_SUBCATEGORY,
    GET_SUBCATEGORIES_FOR_SPECIFIC_CATEGORY
} from "../Types/subcategoryTypes";

const initialState = {
    subcategory: {},
    subcategories: [],
    loading: true,
    status: 0,
}
export default function subcategoryReducer(state = initialState, action) {
    switch (action.type) {
        case GET_SUBCATEGORIES:
            return {
                ...state,
                subcategories: action.payload.subcategories,
                loading: false,
                status: action.payload.status,
            }
        case CREATE_SUBCATEGORY:
            return {
                ...state,
                subcategory: action.payload.subcategory,
                loading: false,
                status: action.payload.status,
            }
        case GET_SUBCATEGORIES_FOR_SPECIFIC_CATEGORY:
            return {
                ...state,
                subcategories: action.payload.subcategories,
                loading: false,
                status: action.payload.status,
            }
        default:
            return state;
    }
}
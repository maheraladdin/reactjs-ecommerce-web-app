import { GET_SUBCATEGORIES, CREATE_SUBCATEGORY} from "../Types/subcategoryTypes";

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
                subcategories: action.payload.brands,
                loading: false,
                status: action.payload.status,
            }
        case CREATE_SUBCATEGORY:
            return {
                ...state,
                subcategory: action.payload.brand,
                loading: false,
                status: action.payload.status,
            }
        default:
            return state;
    }
}
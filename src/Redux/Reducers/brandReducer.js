import { GET_BRANDS, CREATE_BRAND} from "../Types/brandTypes";

const initialState = {
    brands: [],
    loading: true,
    numberOfPages: 0,
}
export default function brandReducer(state = initialState, action) {
    switch (action.type) {
        case GET_BRANDS:
            return {
                ...state,
                brands: action.payload.brands,
                loading: false,
                numberOfPages: action.payload.numberOfPages,
                status: action.payload.status,
            }
        case CREATE_BRAND:
            return {
                ...state,
                brand: action.payload.brand,
                loading: false,
                status: action.payload.status,
            }
        default:
            return state;
    }
}
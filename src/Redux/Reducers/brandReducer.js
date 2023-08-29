import { GET_BRANDS, CREATE_BRAND} from "../Types/brandTypes";

const initialState = {
    brands: [],
    numberOfPages: 0,
    brand: {},
}
export default function brandReducer(state = initialState, action) {
    switch (action.type) {
        case GET_BRANDS:
            return {
                ...state,
                brands: action.payload.brands,
                numberOfPages: action.payload.numberOfPages,
                status: action.payload.status,
            }
        case CREATE_BRAND:
            return {
                ...state,
                brand: action.payload.brand,
                status: action.payload.status,
            }
        default:
            return state;
    }
}
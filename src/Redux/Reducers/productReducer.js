import {GET_PRODUCTS, CREATE_PRODUCT} from "../Types/productTypes";

const initialState = {
    products: [],
    loading: true,
    numberOfPages: 0,
    product: {},
    status: 0,
}
export default function productReducer(state = initialState, action) {
    switch (action.type) {
        case GET_PRODUCTS:
            return {
                ...state,
                products: action.payload.products,
                loading: false,
                numberOfPages: action.payload.numberOfPages,
                status: action.payload.status,
            }
        case CREATE_PRODUCT:
            return {
                ...state,
                product: action.payload.product,
                loading: false,
                status: action.payload.status,
            }
        default:
            return state;
    }
}
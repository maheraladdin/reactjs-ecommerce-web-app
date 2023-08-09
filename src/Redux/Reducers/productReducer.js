import {
    GET_PRODUCTS,
    CREATE_PRODUCT,
    GET_MOST_USED_PRODUCTS,
    GET_NEWEST_PRODUCTS,
    GET_PRODUCT_BY_ID
} from "../Types/productTypes";

const initialState = {
    products: [],
    mostSoldProducts: [],
    newestProducts: [],
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
                length: action.payload.length,
                numberOfDocuments: action.payload.numberOfDocuments,
            }
        case GET_MOST_USED_PRODUCTS:
            return {
                ...state,
                mostSoldProducts: action.payload.mostSoldProducts,
                loading: false,
                status: action.payload.status,
            }
        case GET_NEWEST_PRODUCTS:
            return {
                ...state,
                newestProducts: action.payload.newestProducts,
                loading: false,
                status: action.payload.status,
            }
        case GET_PRODUCT_BY_ID:
            return {
                ...state,
                product: action.payload.product,
                loading: false,
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
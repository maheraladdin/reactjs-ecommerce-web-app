import {
    GET_PRODUCTS,
    CREATE_PRODUCT,
    GET_MOST_USED_PRODUCTS,
    GET_NEWEST_PRODUCTS,
    GET_PRODUCT_BY_ID, UPDATE_PRODUCT, DELETE_PRODUCT
} from "../Types/productTypes";

const initialState = {
    products: [],
    mostSoldProducts: [],
    newestProducts: [],
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
                numberOfPages: action.payload.numberOfPages,
                status: action.payload.status,
                length: action.payload.length,
                numberOfDocuments: action.payload.numberOfDocuments,
            }
        case GET_MOST_USED_PRODUCTS:
            return {
                ...state,
                mostSoldProducts: action.payload.mostSoldProducts,
                status: action.payload.status,
            }
        case GET_NEWEST_PRODUCTS:
            return {
                ...state,
                newestProducts: action.payload.newestProducts,
                status: action.payload.status,
            }
        case GET_PRODUCT_BY_ID:
            return {
                ...state,
                product: action.payload.product,
                status: action.payload.status,
            }
        case CREATE_PRODUCT:
            return {
                ...state,
                product: action.payload.product,
                status: action.payload.status,
            }
        case UPDATE_PRODUCT:
            return {
                ...state,
                product: action.payload.product,
                status: action.payload.status,
            }
        case DELETE_PRODUCT:
            return {
                ...state,
                product: action.payload.product,
                status: action.payload.status,
            }
        default:
            return state;
    }
}
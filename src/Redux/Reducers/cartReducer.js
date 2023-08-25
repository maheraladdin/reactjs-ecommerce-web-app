import { GET_CART, ADD_TO_CART, CLEAR_CART, REMOVE_FROM_CART, UPDATE_ITEM_QUANTITY, APPLY_COUPON} from "../Types/cartTypes";

const initialState = {
    cart: {},
    totalCartPrice: 0,
    status: 0,
}
export default function cartReducer(state = initialState, action) {
    switch (action.type) {
        case GET_CART:
            return {
                ...state,
                cart: action.payload.cart,
                status: action.payload.status,
            }
        case ADD_TO_CART:
            return {
                ...state,
                cart: action.payload.cart,
                status: action.payload.status,
            }
        case REMOVE_FROM_CART:
            return {
                ...state,
                cart: action.payload.cart,
                status: action.payload.status,
            }
        case UPDATE_ITEM_QUANTITY:
            return {
                ...state,
                cart: action.payload.cart,
                status: action.payload.status,
            }
        case CLEAR_CART:
            return {
                ...state,
                cart: action.payload.cart,
                status: action.payload.status,
            }
        case APPLY_COUPON:
            return {
                ...state,
                cart: action.payload.cart,
                status: action.payload.status,
            }
        default:
            return state;
    }
}
import { GET_WISHLIST, ADD_PRODUCT_TO_WISHLIST, DELETE_PRODUCT_FROM_WISHLIST} from "../Types/wishlistTypes";

const initialState = {
    wishlist: [],
    status: 0,
}
export default function wishlistReducer(state = initialState, action) {
    switch (action.type) {
        case GET_WISHLIST:
            return {
                wishlist: action.payload.wishlist,
                status: action.payload.status,
            }
        case ADD_PRODUCT_TO_WISHLIST:
            return {
                wishlist: action.payload.wishlist,
                status: action.payload.status,
            }
        case DELETE_PRODUCT_FROM_WISHLIST:
            return {
                wishlist: action.payload.wishlist,
                status: action.payload.status,
            };
        default:
            return state;
    }
}
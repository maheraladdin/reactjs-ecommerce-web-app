import {CREATE_COUPON, DELETE_COUPON, UPDATE_COUPON, GET_COUPONS} from "../Types/couponTypes";

const initialState = {
    coupons: [],
    status: 0,
}
export default function brandReducer(state = initialState, action) {
    switch (action.type) {
        case GET_COUPONS:
            return {
                ...state,
                coupons: action.payload.coupons,
                status: action.payload.status,
            }
        case CREATE_COUPON:
            return {
                ...state,
                status: action.payload.status,
            }
        case UPDATE_COUPON:
            return {
                ...state,
                status: action.payload.status,
            }
        case DELETE_COUPON:
            return {
                ...state,
                status: action.payload.status,
            }
        default:
            return state;
    }
}
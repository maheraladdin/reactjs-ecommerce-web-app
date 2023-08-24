import {CREATE_COUPON, DELETE_COUPON, UPDATE_COUPON, GET_COUPONS, GET_COUPON_BY_ID} from "../Types/couponTypes";

const initialState = {
    coupons: [],
    status: 0,
    numberOfPages: 0,
    coupon: {},
}
export default function couponReducer(state = initialState, action) {
    switch (action.type) {
        case GET_COUPONS:
            return {
                ...state,
                coupons: action.payload.coupons,
                status: action.payload.status,
                numberOfPages: action.payload.numberOfPages,
            }
        case GET_COUPON_BY_ID:
            return {
                ...state,
                coupon: action.payload.coupon,
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
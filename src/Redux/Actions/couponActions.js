import { GET_COUPONS, UPDATE_COUPON, DELETE_COUPON, CREATE_COUPON } from "../Types/couponTypes";
import reduxApi from "../logic/reduxApi";
export const getCoupons = (params) => reduxApi("get", "/coupons", params,
    (dispatch, payload) => {
        dispatch({
            type: GET_COUPONS,
            payload: {
                coupons: payload.data.documents,
                status: payload.status,
            }
        });
    });

export const createCoupon = (params) => reduxApi("post", "/coupons", params,
    (dispatch, payload) => {
        dispatch({
            type: CREATE_COUPON,
            payload: {
                status: payload.status,
            }
        });
    });

export const updateCoupon = (id, params) => reduxApi("put", `/coupons/${id}`, params,
    (dispatch, payload) => {
        dispatch({
            type: UPDATE_COUPON,
            payload: {
                status: payload.status,
            }
        });
    });

export const deleteCoupon = (id, params) => reduxApi("delete", `/coupons/${id}`, params,
    (dispatch, payload) => {
        dispatch({
            type: DELETE_COUPON,
            payload: {
                status: payload.status,
            }
        });
    });
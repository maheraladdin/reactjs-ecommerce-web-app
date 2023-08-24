import { GET_COUPONS, UPDATE_COUPON, DELETE_COUPON, CREATE_COUPON, GET_COUPON_BY_ID } from "../Types/couponTypes";
import reduxApi from "../logic/reduxApi";
export const getCoupons = (page = 1,limit = 12,params) => reduxApi("get", `/coupons?page=${page}&limit=${limit}`, params,
    (dispatch, payload) => {
        dispatch({
            type: GET_COUPONS,
            payload: {
                coupons: payload.data.documents,
                numberOfPages: payload.data.paginationResult.numberOfPages,
                status: payload.status,
            }
        });
    });

export const getCouponById = (id, params) => reduxApi("get", `/coupons/${id}`, params,
    (dispatch, payload) => {
        dispatch({
            type: GET_COUPON_BY_ID,
            payload: {
                coupon: payload.data.document,
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
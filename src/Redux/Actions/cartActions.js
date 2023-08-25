import {GET_CART, CLEAR_CART, REMOVE_FROM_CART, ADD_TO_CART, UPDATE_ITEM_QUANTITY, APPLY_COUPON} from "../Types/cartTypes";
import reduxApi from "../logic/reduxApi";

export const getCart = params => reduxApi("get", "/cart", params,
    (dispatch, payload) => {
        dispatch({
            type: GET_CART,
            payload: {
                cart: payload.data.cart,
                status: payload.status,
            }
        });
    });

export const addToCart = params => reduxApi("post", "/cart", params,
    (dispatch, payload) => {
        dispatch({
            type: ADD_TO_CART,
            payload: {
                cart: payload.data.cart,
                status: payload.status,
            }
        });
    });

export const removeFromCart = (id,params) => reduxApi("delete", `/cart/${id}`, params,
    (dispatch, payload) => {
        dispatch({
            type: REMOVE_FROM_CART,
            payload: {
                cart: payload.data.cart,
                status: payload.status,
            }
        });
    });

export const updateItemQuantity = (id, params) => reduxApi("patch", `/cart/${id}`, params,
    (dispatch, payload) => {
        dispatch({
            type: UPDATE_ITEM_QUANTITY,
            payload: {
                cart: payload.data.cart,
                status: payload.status,
            }
        });
    });

export const clearCart = params => reduxApi("delete", "/cart", params,
    (dispatch, payload) => {
        dispatch({
            type: CLEAR_CART,
            payload: {
                cart: payload.data.cart,
                status: payload.status,
            }
        });
    });

export const applyCoupon = params => reduxApi("patch", "/cart/applyCoupon", params,
    (dispatch, payload) => {
        dispatch({
            type: APPLY_COUPON,
            payload: {
                cart: payload.data.cart,
                status: payload.status,
            }
        });
    });
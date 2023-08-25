import {GET_CART, CLEAR_CART, REMOVE_FROM_CART, ADD_TO_CART, UPDATE_ITEM_QUANTITY, APPLY_COUPON} from "../Types/cartTypes";
import reduxApi from "../logic/reduxApi";

export const getCart = params => reduxApi("get", "/cart", params,
    (dispatch, payload) => {
        dispatch({
            type: GET_CART,
            payload: {
                cart: payload.data.cart,
                totalCartPrice: payload.data.totalCartPrice,
                status: payload.status,
                totalCartDiscountedPrice: undefined,
            }
        });
    });

export const addToCart = params => reduxApi("post", "/cart", params,
    (dispatch, payload) => {
        dispatch({
            type: ADD_TO_CART,
            payload: {
                cart: payload.data.cart,
                totalCartPrice: payload.data.totalCartPrice,
                status: payload.status,
                totalCartDiscountedPrice: undefined,
            }
        });
    });

export const removeFromCart = params => reduxApi("delete", "/cart", params,
    (dispatch, payload) => {
        dispatch({
            type: REMOVE_FROM_CART,
            payload: {
                cart: payload.data.cart,
                totalCartPrice: payload.data.totalCartPrice,
                status: payload.status,
                totalCartDiscountedPrice: undefined,
            }
        });
    });

export const updateItemQuantity = params => reduxApi("patch", "/cart", params,
    (dispatch, payload) => {
        dispatch({
            type: UPDATE_ITEM_QUANTITY,
            payload: {
                cart: payload.data.cart,
                totalCartPrice: payload.data.totalCartPrice,
                status: payload.status,
                totalCartDiscountedPrice: undefined,
            }
        });
    });

export const clearCart = params => reduxApi("delete", "/cart/clear", params,
    (dispatch, payload) => {
        dispatch({
            type: CLEAR_CART,
            payload: {
                cart: payload.data.cart,
                totalCartPrice: payload.data.totalCartPrice,
                status: payload.status,
                totalCartDiscountedPrice: undefined,
            }
        });
    });

export const applyCoupon = params => reduxApi("post", "/cart/coupon", params,
    (dispatch, payload) => {
        dispatch({
            type: APPLY_COUPON,
            payload: {
                cart: payload.data.cart,
                totalCartPrice: payload.data.totalCartPrice,
                totalCartDiscountedPrice: payload.data.totalCartDiscountedPrice,
                status: payload.status,
            }
        });
    });
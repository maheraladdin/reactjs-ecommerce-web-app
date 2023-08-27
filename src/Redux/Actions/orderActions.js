import {GET_ALL_ORDERS, CREATE_NEW_CASH_ORDER, GET_ORDER_BY_ID, GET_PAYMENT_SESSION, UPDATE_ORDER_PAY_STATUS, UPDATE_ORDER_CANCEL_STATUS, UPDATE_ORDER_DELIVERY_STATUS} from "../Types/orderTypes";
import reduxApi from "../logic/reduxApi";

export const getAllOrders = (page, limit, params) => reduxApi("get", `/orders?page=${page}&limit=${limit}`, params,
    (dispatch,payload) => {
        dispatch({
            type: GET_ALL_ORDERS,
            payload: {
                numberOfPages: payload.data.paginationResult.numberOfPages,
                orders: payload.data.documents,
                status: payload.status,
                currentPage: payload.data.paginationResult.currentPage,
            }
        })
    });

export const getOrderById = (id,params) => reduxApi("get", `/orders/${id}`, params,
    (dispatch,payload) => {
        dispatch({
            type: GET_ORDER_BY_ID,
            payload: {
                order: payload.data.document,
                status: payload.status,
            }
        })
    });

export const createNewCashOrder = (id, params) => reduxApi("post", `/orders/${id}`, params,
    (dispatch,payload) => {
        dispatch({
            type: CREATE_NEW_CASH_ORDER,
            payload: {
                status: payload.status,
            }
        })
    });


// TODO: repair this
export const getPaymentSession = (params) => reduxApi("get", `/orders/payment-session`, params,
    (dispatch,payload) => {
        dispatch({
            type: GET_PAYMENT_SESSION,
            payload: {
                paymentSession: payload.data.paymentSession,
                status: payload.status,
            }
        })
    });

export const updateOrderPayStatus = (id, params) => reduxApi("patch", `/orders/${id}/pay`, params,
    (dispatch,payload) => {
        dispatch({
            type: UPDATE_ORDER_PAY_STATUS,
            payload: {
                status: payload.status,
            }
        })
    });

export const updateOrderDeliveryStatus = (id, params) => reduxApi("patch", `/orders/${id}/deliver`, params,
    (dispatch,payload) => {
        dispatch({
            type: UPDATE_ORDER_DELIVERY_STATUS,
            payload: {
                status: payload.status,
            }
        })
    });

export const updateOrderCancelStatus = (id, params) => reduxApi("patch", `/orders/${id}/cancel`, params,
    (dispatch,payload) => {
        dispatch({
            type: UPDATE_ORDER_CANCEL_STATUS,
            payload: {
                status: payload.status,
            }
        })
    });
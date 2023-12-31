import {GET_ALL_ORDERS, CREATE_NEW_CASH_ORDER, GET_ORDER_BY_ID, GET_PAYMENT_SESSION, UPDATE_ORDER_PAY_STATUS, UPDATE_ORDER_CANCEL_STATUS, UPDATE_ORDER_DELIVERY_STATUS} from "../Types/orderTypes";

const initialState = {
    orders: [],
    order: {},
    status: 0,
    numberOfPages: 0,
    currentPage: 1,
    session: {},
}

export default function orderReducer(state = initialState, action) {
    switch (action.type) {
        case GET_ALL_ORDERS:
            return {
                ...state,
                orders: action.payload.orders,
                status: action.payload.status,
                numberOfPages: action.payload.numberOfPages,
                currentPage: action.payload.currentPage,
            }
        case GET_ORDER_BY_ID:
            return {
                ...state,
                order: action.payload.order,
                status: action.payload.status,
            }
        case CREATE_NEW_CASH_ORDER:
            return {
                ...state,
                status: action.payload.status,
            }
        case GET_PAYMENT_SESSION:
            return {
                ...state,
                status: action.payload.status,
                session: action.payload.session,
            }
        case UPDATE_ORDER_PAY_STATUS:
            return {
                ...state,
                status: action.payload.status,
                order: action.payload.order
            }
        case UPDATE_ORDER_DELIVERY_STATUS:
            return {
                ...state,
                status: action.payload.status,
                order: action.payload.order
            }
        case UPDATE_ORDER_CANCEL_STATUS:
            return {
                ...state,
                status: action.payload.status,
                order: action.payload.order
            }
        default:
            return state;
    }
}
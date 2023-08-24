import {GET_ADDRESSES, CREATE_ADDRESS, UPDATE_ADDRESS, DELETE_ADDRESS} from "../Types/addressTypes";

const initialState = {
    addresses: [],
    address: {},
    status: 0,
}
export default function brandReducer(state = initialState, action) {
    switch (action.type) {
        case GET_ADDRESSES:
            return {
                ...state,
                addresses: action.payload.addresses,
                status: action.payload.status,
            }
        case CREATE_ADDRESS:
            return {
                ...state,
                status: action.payload.status,
            }
        case UPDATE_ADDRESS:
            return {
                ...state,
                status: action.payload.status,
                address: action.payload.address,
            }
        case DELETE_ADDRESS:
            return {
                ...state,
                status: action.payload.status,
            }
        default:
            return state;
    }
}
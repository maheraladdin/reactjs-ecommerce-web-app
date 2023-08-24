import {GET_ADDRESSES, CREATE_ADDRESS, UPDATE_ADDRESS, DELETE_ADDRESS, GET_ADDRESS_BY_ID} from "../Types/addressTypes";

const initialState = {
    addresses: [],
    address: {},
    status: 0,
}
export default function addressReducer(state = initialState, action) {
    switch (action.type) {
        case GET_ADDRESSES:
            return {
                ...state,
                addresses: action.payload.addresses,
                status: action.payload.status,
            }
        case GET_ADDRESS_BY_ID:
            return {
                ...state,
                address: action.payload.address,
                status: action.payload.status,
            }
        case CREATE_ADDRESS:
            return {
                ...state,
                addresses: action.payload.addresses,
                status: action.payload.status,
            }
        case UPDATE_ADDRESS:
            return {
                ...state,
                addresses: action.payload.addresses,
                status: action.payload.status,
            }
        case DELETE_ADDRESS:
            return {
                ...state,
                addresses: action.payload.addresses,
                status: action.payload.status,
            }
        default:
            return state;
    }
}
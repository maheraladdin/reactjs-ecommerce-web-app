import reduxApi from "../logic/reduxApi";
import {CREATE_ADDRESS, DELETE_ADDRESS, GET_ADDRESSES, UPDATE_ADDRESS} from "../Types/addressTypes";

export const getAddresses = (params) => reduxApi("get", "/addresses", params,
    (dispatch,payload) =>{
        dispatch({
            type: GET_ADDRESSES,
            payload: {
                addresses: payload.data.addresses,
                status: payload.status,
            }
        })
    });

export const getAddressById = (address, params) => reduxApi("get", `/addresses/${address}`, params,
    (dispatch,payload) => {
        dispatch({
            type: GET_ADDRESSES,
            payload: {
                address: payload.data.address,
                status: payload.status,
            }
        })
    });


export const createAddress = (params) => reduxApi("post", "/addresses", params,
    (dispatch,payload) => {
        dispatch({
            type: CREATE_ADDRESS,
            payload: {
                addresses: payload.data.addresses,
                status: payload.status,
            }
        })
    });


export const updateAddress = (address, params) => reduxApi("put", `/addresses/${address}`, params,
    (dispatch,payload) => {
        dispatch({
            type: UPDATE_ADDRESS,
            payload: {
                addresses: payload.data.addresses,
                status: payload.status,
            }
        })
    });

export const deleteAddress = (address, params) => reduxApi("delete", `/addresses/${address}`, params,
    (dispatch,payload) => {
        dispatch({
            type: DELETE_ADDRESS,
            payload: {
                addresses: payload.data.addresses,
                status: payload.status,
            }
        })
    });
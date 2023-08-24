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


export const createAddress = (params) => reduxApi("post", "/addresses", params,
    (dispatch,payload) => {
        dispatch({
            type: CREATE_ADDRESS,
            payload: {
                status: payload.status,
            }
        })
    });


export const updateAddress = (params) => reduxApi("put", "/addresses", params,
    (dispatch,payload) => {
        dispatch({
            type: UPDATE_ADDRESS,
            payload: {
                status: payload.status,
                address: payload.data.address,
            }
        })
    });

export const deleteAddress = (params) => reduxApi("delete", "/addresses", params,
    (dispatch,payload) => {
        dispatch({
            type: DELETE_ADDRESS,
            payload: {
                status: payload.status,
            }
        })
    });
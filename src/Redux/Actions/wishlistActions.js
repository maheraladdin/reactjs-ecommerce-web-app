import {GET_WISHLIST, DELETE_PRODUCT_FROM_WISHLIST, ADD_PRODUCT_TO_WISHLIST} from "../Types/wishlistTypes";
import reduxApi from "../logic/reduxApi";

/**
 * Get wishlist from API
 * @param  {Object} params - Params of request
 * @param  {Object} params.body - Config of request
 * @return {(function(*): Promise<void>)|*}
 */
export const getWishlist = (params) => reduxApi("get",
    `/wishlist`,
    params,
    (dispatch, payload) => {
        dispatch({
            type: GET_WISHLIST,
            payload: {
                wishlist: payload.data.wishlist,
                status: payload.status,
            }
        });
    });

/**
 * Create brand from API
 * @param  {Object} params - Params of request
 * @param  {Object} params.body - Body of request
 * @param  {Object} params.config - Config of request
 * @return {(function(*): Promise<void>)|*}
 */
export const addProductToWishlist = (params) => reduxApi("post", "/wishlist", params
    ,(dispatch, payload) => {
        dispatch({
            type: ADD_PRODUCT_TO_WISHLIST,
            payload: {
                status: payload.status,
                wishlist: payload.data.wishlist,
            }
        });
    });

/**
 * Delete brand from API
 * @param  {string} id - id of product
 * @param  {Object} params - Params of request
 * @param  {Object} params.body - Config of request
 * @return {(function(*): Promise<void>)|*}
 */
export const deleteProductFromWishlist = (id, params) => reduxApi("delete", `/wishlist/${id}`, params
    ,(dispatch, payload) => {
        dispatch({
            type: DELETE_PRODUCT_FROM_WISHLIST,
            payload: {
                wishlist: payload.data.wishlist,
                status: payload.status
            }
        });
    });
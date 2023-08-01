import {GET_PRODUCTS, CREATE_PRODUCT} from "../Types/productTypes";
import reduxApi from "../logic/reduxApi";

// Create a hook to use reduxApi

// eslint-disable-next-line react-hooks/rules-of-hooks

/**
 * Get products from API
 * @param {number} page - Page number
 * @param {number} limit - Limit of products
 * @param {string} sort - Sort of products
 * @return {(function(*): Promise<void>)|*}
 */
export const getProducts = (page = 1,limit = 12 ,sort = "-createdAt") => reduxApi("get",
    `/products?page=${page}&limit=${limit}&sort=${sort}`,
    undefined,
    (dispatch, payload) => {
        dispatch({
            type: GET_PRODUCTS,
            payload: {
                products: payload.data.documents,
                numberOfPages: payload.data.paginationResult.numberOfPages,
                status: payload.status,
            }
        });
    });

/**
 * Create product from API
 * @param  {Object} params - Params of request
 * @param  {Object} params.body - Body of request
 * @param  {Object} params.config - Config of request
 * @param  {Object} params.config.headers - Headers of request
 * @return {(function(*): Promise<void>)|*}
 */
export const createProduct = (params) => reduxApi("post", "/products", params
    ,(dispatch, payload) => {
        dispatch({
            type: CREATE_PRODUCT,
            payload: {
                product: payload.data.document,
                status: payload.status,
            }
        });
    });
import {
    GET_PRODUCTS,
    CREATE_PRODUCT,
    GET_MOST_USED_PRODUCTS,
    GET_NEWEST_PRODUCTS,
    GET_PRODUCT_BY_ID, DELETE_PRODUCT
} from "../Types/productTypes";
import reduxApi from "../logic/reduxApi";


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
                productRequestStatus: payload.status,
                length: payload.data.length,
                numberOfDocuments: payload.data.numberOfDocuments,
            }
        });
    });

/**
 * @desc    Get most sold products from API
 * @param {number} page - Page number
 * @param {number} limit - Limit of products
 * @param {string} sort - Sort of products
 * @return  {(function(*): Promise<void>)|*}
 */
export const getMostSoldProducts = (page = 1,limit = 4 ,sort = "-sold") => reduxApi("get",
    `/products?page=${page}&limit=${limit}&sort=${sort}`,
    undefined,
    (dispatch, payload) => {
        dispatch({
            type: GET_MOST_USED_PRODUCTS,
            payload: {
                mostSoldProducts: payload.data.documents,
                status: payload.status,
            }
        });
    });

/**
 * @desc Get newest products from API
 * @param {number} page - Page number
 * @param {number} limit - Limit of products
 * @param {string} sort - Sort of products
 * @return {(function(*): Promise<void>)|*}
 */
export const getNewestProducts = (page = 1,limit = 4 ,sort = "-createdAt") => reduxApi("get",
    `/products?page=${page}&limit=${limit}&sort=${sort}`,
    undefined,
    (dispatch, payload) => {
        dispatch({
            type: GET_NEWEST_PRODUCTS,
            payload: {
                newestProducts: payload.data.documents,
                status: payload.status,
            }
        });
    });

export const getProductById = (id) => reduxApi("get", `/products/${id}`, undefined, (dispatch, payload) => {
    dispatch({
        type: GET_PRODUCT_BY_ID,
        payload: {
            product: payload.data.document,
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
    ,async (dispatch, payload) => {
        await dispatch({
            type: CREATE_PRODUCT,
            payload: {
                product: payload.data.document,
                status: payload.status,
            }
        });
    });

/**
 * @desc    Update product by iD
 * @param   {String} id - product id
 * @param   {Object} params - request params
 * @param  {Object} params.body - Body of request
 * @param  {Object} params.config - Config of request
 * @param  {Object} params.config.headers - Headers of request
 * @return {(function(*): Promise<void>)|*}
 */
export const updateProduct = (id, params) => reduxApi("put", `/products/${id}`, params,
    (dispatch, payload) => {
    dispatch({
        type: CREATE_PRODUCT,
        payload: {
            product: payload.data.document,
            status: payload.status,
        }
    });
});


/**
 * @desc    Delete product by id
 * @param   {string} id - id of product
 * @param   {Object} params - Params of request
 * @param   {Object} params.body - request body
 * @param   {Object} params.body.headers - request headers
 * @return  {(function(*): Promise<void>)|*}
 */
export const deleteProduct = (id, params) => reduxApi("delete", `/products/${id}`, params,
    (dispatch, payload) => {
    dispatch({
        type: DELETE_PRODUCT,
        payload: {
            product: payload.data.document,
            status: payload.status,
        }
    });
});
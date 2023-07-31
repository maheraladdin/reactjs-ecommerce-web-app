import { GET_BRANDS, CREATE_BRAND} from "../Types/brandTypes";
import reduxApi from "../logic/reduxApi";

// Create a hook to use reduxApi

// eslint-disable-next-line react-hooks/rules-of-hooks

/**
 * Get brands from API
 * @param {number} page - Page number
 * @param {number} limit - Limit of brands
 * @return {(function(*): Promise<void>)|*}
 */
export const getBrands = (page = 1,limit = 12) => reduxApi("get",
    `/brands?page=${page}&limit=${limit}&sort=createdAt`,
    undefined,
    (dispatch, payload) => {
        dispatch({
            type: GET_BRANDS,
            payload: {
                brands: payload.data.documents,
                numberOfPages: payload.data.paginationResult.numberOfPages,
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
export const createBrand = (params) => reduxApi("post", "/brands", params
    ,(dispatch, payload) => {
        dispatch({
            type: CREATE_BRAND,
            payload: {
                brand: payload.data.document,
                status: payload.status,
            }
        });
    });
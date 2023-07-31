import {GET_SUBCATEGORIES, CREATE_SUBCATEGORY} from "../Types/subcategoryTypes";
import reduxApi from "../logic/reduxApi";


/**
 * Get brands from API
 * @param  {number} limit - Limit of subcategories
 * @param  {number} page - Page number
 * @return {(function(*): Promise<void>)|*}
 */
export const getSubcategories = (page,limit = 12) => reduxApi("get",
    `/subCategories?page=${page}&limit=${limit}&sort=createdAt`,
    undefined,
    (dispatch, payload) => {
        dispatch({
            type: GET_SUBCATEGORIES,
            payload: {
                subcategories: payload.data.documents,
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
export const createSubcategory = (params) => reduxApi("post", "/subCategories", params
    ,(dispatch, payload) => {
        dispatch({
            type: CREATE_SUBCATEGORY,
            payload: {
                subcategory: payload.data.document,
                status: payload.status,
            }
        });
    });
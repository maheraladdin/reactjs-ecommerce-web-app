import {
    GET_SUBCATEGORIES,
    CREATE_SUBCATEGORY,
    GET_SUBCATEGORIES_FOR_SPECIFIC_CATEGORY
} from "../Types/subcategoryTypes";
import reduxApi from "../logic/reduxApi";


/**
 * @desc    Get subcategories from API
 * @param  {number} limit - Limit of subcategories
 * @param  {number} page - Page number
 * @param  {string} sort - Sort of subcategories
 * @return {(function(*): Promise<void>)|*}
 */
export const getSubcategories = (page,limit = 12, sort = "-createdAt") => reduxApi("get",
    `/subCategories?page=${page}&limit=${limit}&sort=${sort}`,
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
 * @desc    Get subcategories for specific category from API
 * @param  {string} categoryId - id of category
 * @param  {number?} limit - Limit of subcategories
 * @param  {number?} page - Page number
 * @param  {string?} sort - Sort of subcategories
 * @return {(function(*): Promise<void>)|*}
 */
export const getSubcategoriesForSpecificCategory = (categoryId, page = 1,limit = 12, sort = "-createdAt") => reduxApi("get",
    `/Categories/${categoryId}/subCategories?page=${page}&limit=${limit}&sort=${sort}`,
    undefined,
    (dispatch, payload) => {
        dispatch({
            type: GET_SUBCATEGORIES_FOR_SPECIFIC_CATEGORY,
            payload: {
                subcategories: payload.data.documents,
                status: payload.status,
            }
        });
    });



/**
 * @desc    Create subcategory from API
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
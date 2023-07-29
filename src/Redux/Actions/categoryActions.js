import {CREATE_CATEGORY, GET_CATEGORIES} from "../Types/categoryType";
import useReduxApi from "../../Hooks/useReduxApi";

/**
 * Get categories from API
 * @param {number} page - Page number
 * @param {number} limit - Limit of categories
 * @return {(function(*): Promise<void>)|*}
 */
// eslint-disable-next-line react-hooks/rules-of-hooks
export const getCategories = (page = 1,limit = 12) => useReduxApi("get",
    `/categories?page=${page}&limit=${limit}&sort=createdAt`,
    undefined,
    (dispatch, payload) => {
    dispatch({
        type: GET_CATEGORIES,
        payload: {
            categories: payload.data.documents,
            numberOfPages: payload.data.paginationResult.numberOfPages,
            status: payload.status,
        }
    });
});

/**
 * Create category from API
 * @param  {Object} params - Params of request
 * @param  {Object} params.body - Body of request
 * @param  {Object} params.config - Config of request
 * @return {(function(*): Promise<void>)|*}
 */
// eslint-disable-next-line react-hooks/rules-of-hooks
export const createCategory = (params) => useReduxApi("post", "/categories", params
    ,(dispatch, payload) => {
    console.log(payload);
    dispatch({
        type: CREATE_CATEGORY,
        payload: {
            category: payload.data.document,
            status: payload.status,
        }
    });
});
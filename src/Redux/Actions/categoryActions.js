import {GET_CATEGORIES} from "../Types/categoryType";
import useReduxApi from "../../Hooks/useReduxApi";

/**
 * Get categories from API
 * @param {number} page - Page number
 * @param {number} limit - Limit of categories
 * @return {(function(*): Promise<void>)|*}
 */
// eslint-disable-next-line react-hooks/rules-of-hooks
export const getCategories = (page = 1,limit = 12) => useReduxApi("get",`/categories?page=${page}&limit=${limit}`, (dispatch, payload) => {
    dispatch({
        type: GET_CATEGORIES,
        payload: {
            categories: payload.data.documents,
            numberOfPages: payload.data.paginationResult.numberOfPages,
        }
    });
});
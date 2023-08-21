import reduxApi from "../logic/reduxApi";
import {CREATE_REVIEW, DELETE_REVIEW, GET_REVIEWS, UPDATE_REVIEW} from "../Types/reviewTypes";

/**
 * @desc    Get reviews for specific product from API
 * @param   productId
 * @param   page
 * @param   limit
 * @param   sort
 * @return  {(function(*): Promise<void>)|*}
 */
export const getReviewsForSpecificProduct = (productId, page = 1,limit = 6, sort = "-createdAt") => reduxApi("get",
    `/products/${productId}/reviews?limit=${limit}&sort=${sort}`,
    undefined,
    (dispatch, payload) => {
    const numberOfRatesInPage = 6;
        dispatch({
            type: GET_REVIEWS,
            payload: {
                reviews: payload.data.documents.slice((page - 1) * numberOfRatesInPage, page * numberOfRatesInPage),
                status: payload.status,
                numberOfPages: Math.ceil(payload.data.documents.length / numberOfRatesInPage),
            }
        });
    });

/**
 * @desc    Create review for specific product from API
 * @param   params
 * @return  {(function(*): Promise<void>)|*}
 */
export const createReview = (params) => reduxApi("post", "/reviews", params, (dispatch, payload) => {
    dispatch({
        type: CREATE_REVIEW,
        payload: {
            review: payload.data.document,
            status: payload.status,
        }
    });
});

/**
 * @desc    Update review from API
 * @param   reviewId
 * @param   params
 * @return  {(function(*): Promise<void>)|*}
 */
export const updateReview = (reviewId, params) => reduxApi("put", `/reviews/${reviewId}`, params, (dispatch, payload) => {
    dispatch({
        type: UPDATE_REVIEW,
        payload: {
            review: payload.data.document,
            status: payload.status,
        }
    });
});

/**
 * @desc    Delete review from API
 * @param   reviewId
 * @param   params
 * @return  {(function(*): Promise<void>)|*}
 */
export const deleteReview = (reviewId, params) => reduxApi("delete", `/reviews/${reviewId}`, params, (dispatch, payload) => {
    dispatch({
        type: DELETE_REVIEW,
        payload: {
            review: {},
            status: payload.status,
        }
    });
});
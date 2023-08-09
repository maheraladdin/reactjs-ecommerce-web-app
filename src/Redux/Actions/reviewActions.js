import reduxApi from "../logic/reduxApi";
import {CREATE_REVIEW, GET_REVIEWS} from "../Types/reviewTypes";

/**
 * @desc    Get reviews for specific product from API
 * @param productId
 * @param page
 * @param limit
 * @param sort
 * @return {(function(*): Promise<void>)|*}
 */
export const getReviewsForSpecificProduct = (productId, page = 1,limit = 6, sort = "-createdAt") => reduxApi("get",
    `/products/${productId}/reviews?page=${page}&limit=${limit}&sort=${sort}`,
    undefined,
    (dispatch, payload) => {
        dispatch({
            type: GET_REVIEWS,
            payload: {
                reviews: payload.data.documents,
                status: payload.status,
            }
        });
    });

export const createReview = (params) => reduxApi("post", "/reviews", params, (dispatch, payload) => {
    dispatch({
        type: CREATE_REVIEW,
        payload: {
            review: payload.data.document,
            status: payload.status,
        }
    });
});
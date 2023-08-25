import baseURL from "../../Api/BaseURL";
import {GET_ERROR} from "../Types/errorType";


/**
 * @description This hook is used to Request data with any method from API, dispatch the response to redux, and handle errors
 * @param {String} method - Method of request (get, post, put, delete, patch) ,in case of delete method send headers in body
 * @param {String} url - URL of request
 * @param {{config: {headers: Object}}} params - Params of request
 * @param {Number} params.timeout - Timeout of request
 * @param {Object} params.body - Body of request
 * @param {Object} params.body.headers - Headers of request (in case of delete method send headers in body)
 * @param {Object} params.config - Config of request
 * @param {Object} params.config.headers - Headers of request
 * @param {Function} callbackDispatch - Callback function to dispatch the response to redux
 * @return {(function(*): Promise<void>)|*}
 */
export default function reduxApi(method, url, params = {}, callbackDispatch) {
    params.timeout = 10000;
    return async (dispatch) => {
        try {
            // fetch data from a url endpoint
            const payload = await baseURL[method](url, params?.body, params?.config);
            // dispatch the response to redux
            await callbackDispatch(dispatch, payload);
        } catch (error) {
            // dispatch the error to redux
            dispatch({
                type: GET_ERROR,
                error: error,
                status: error && error.response && error.response.status,
            });
        }
    }
}
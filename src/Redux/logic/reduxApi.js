import baseURL from "../../Api/BaseURL";
import {GET_ERROR} from "../Types/errorType";


/**
 * @description This hook is used to Request data with any method from API, dispatch the response to redux, and handle errors
 * @param {String} method - Method of request (get, post, put, delete, patch)
 * @param {String} url - URL of request
 * @param {Object} params - Params of request
 * @param {Function} callbackDispatch - Callback function to dispatch the response to redux
 * @return {(function(*): Promise<void>)|*}
 */
export default function reduxApi(method, url, params, callbackDispatch) {
    return async (dispatch) => {
        try {
            // fetch data from a url endpoint
            const payload = await baseURL[method](url, params && params.body && params.body, params && params.config && params.config);
            // dispatch the response to redux
            await callbackDispatch(dispatch, payload);
        } catch (error) {
            // dispatch the error to redux
            dispatch({
                type: GET_ERROR,
                error: error,
                status: error.response.status,
            });
        }
    }
}
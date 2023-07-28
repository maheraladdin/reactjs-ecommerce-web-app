import baseURL from "../Api/BaseURL";
import {GET_ERROR} from "../Redux/Types/categoryType";


/**
 * @description This hook is used to Request data with any method from API, dispatch the response to redux, and handle errors
 * @param {String} method - Method of request (get, post, put, delete, patch)
 * @param {String} url - URL of request
 * @param {Function} callbackDispatch - Callback function to dispatch the response to redux
 * @return {(function(*): Promise<void>)|*}
 */
export default function useReduxApi(method, url, callbackDispatch) {
    return async (dispatch) => {
        try {
            const payload = await baseURL[method](url);
            await callbackDispatch(dispatch, payload);
        } catch (error) {
            dispatch({
                type: GET_ERROR,
                payload: "Error: " + error,
            });
        }
    }
}
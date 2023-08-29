import baseURL from "../../Api/BaseURL";
import {GET_ERROR} from "../Types/errorType";
import {toast} from "react-toastify";

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
            // toast the success message
            if(payload?.message) toast.success(payload.message);
        } catch (e) {
            if(e?.response?.data?.errors) {
                for (let error of e.response.data.errors) {
                    toast.error(error.msg);
                }
            }
            else if(e?.response?.data?.message) {
                toast.error(e.response.data.message);
            }
            else if(e?.response?.data) {
                toast.error(e.response.data);
            }
            // dispatch the error to redux
            dispatch({
                type: GET_ERROR,
                error: e,
                status: e?.response?.status,
            });
        }
    }
}
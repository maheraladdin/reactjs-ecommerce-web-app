import {toast} from "react-toastify";

/**
 * @desc   This hook is used to show notification with react-toastify
 * @param  {string?} defaultMsg - Default message of notification
 * @param  {string?} defaultType - Default type of notification
 * @param  {Object?} defaultOptions - Default options of notification
 * @return {function(*, *, {}=): number | string}
 */
export default function useNotify(defaultMsg,defaultType,defaultOptions) {
    return (msg = defaultMsg,type = defaultType,options = defaultOptions || {}) => toast(msg, {
        type,
        ...options
    });
}
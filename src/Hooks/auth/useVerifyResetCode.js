import {useState} from "react";
import useNotify from "../useNotify";
import baseURL from "../../Api/BaseURL";
import {resetForgottenPasswordRoute} from "../../constants/routes";
import {useNavigate} from "react-router-dom";
import {toast} from "react-toastify";
import {GET_ERROR} from "../../Redux/Types/errorType";
import {useDispatch} from "react-redux";

export default function useVerifyResetCode() {
    const [resetCode, setResetCode] = useState('');
    const [validated, setValidated] = useState(false);

    const notify = useNotify();
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleResetCodeChange = (e) => {
        setResetCode(e.target.value);
    }

     const handleSubmit = async (e) => {
        e.preventDefault();
        setValidated(true);
        if(!resetCode) return notify('Please enter the reset code', 'error');

        // verify the reset code
         try {
            const payload = await baseURL.post('/auth/verifyPasswordResetToken', {passwordResetToken: resetCode});
             notify(payload.data.massage, 'success');
             if(payload.status.toString().startsWith("2"))
                 setTimeout(() => {
                     navigate(resetForgottenPasswordRoute);
                 }, 1000);
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

    return {
        resetCode,
        handleResetCodeChange,
        validated,
        handleSubmit
    }
}
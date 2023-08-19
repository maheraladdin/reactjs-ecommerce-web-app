import {useState} from "react";
import useNotify from "../useNotify";
import baseURL from "../../Api/BaseURL";
import {resetForgottenPasswordRoute} from "../../constants/routes";
import {useNavigate} from "react-router-dom";

export default function useVerifyResetCode() {
    const [resetCode, setResetCode] = useState('');
    const [validated, setValidated] = useState(false);

    const notify = useNotify();
    const navigate = useNavigate();

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
             notify(payload.massage, 'success');
             setTimeout(() => {
                 navigate(resetForgottenPasswordRoute);
             }, 1000);
         } catch (e) {
             if(e && e.response && e.response.data && e.response.data.errors) {
                 for(let error of e.response.data.errors) {
                     notify(error.msg, 'error');
                 }
             }
             if(e && e.response && e.response.data) {
                 notify(e.response.data, 'error');
             }
         }
     }

    return {
        resetCode,
        handleResetCodeChange,
        validated,
        handleSubmit
    }
}
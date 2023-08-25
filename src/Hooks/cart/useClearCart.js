import {useDispatch, useSelector} from "react-redux";
import useNotify from "../useNotify";
import {useState} from "react";
import {clearCart} from "../../Redux/Actions/cartActions";

export default function useClearCart() {
    const dispatch = useDispatch();
    const notify = useNotify();
    const token = useSelector(state => state.userReducer.token);

    const [loading, setLoading] = useState(false);
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(!show);

    const handleClearCart = async () => {
        setLoading(true);
        await dispatch(clearCart({
            body: {
                headers: {
                    Authorization: `Bearer ${token}`,
                }
            }
        }));
        setLoading(false);
        notify("Cart cleared successfully", "success");
    }

    return {
        loading,
        handleClearCart,
        handleClose,
        show,
    }
}
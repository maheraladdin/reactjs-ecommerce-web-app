import {useDispatch, useSelector} from "react-redux";
import {useState} from "react";
import {clearCart} from "../../Redux/Actions/cartActions";

export default function useClearCart() {
    const dispatch = useDispatch();
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
    }

    return {
        loading,
        handleClearCart,
        handleClose,
        show,
    }
}
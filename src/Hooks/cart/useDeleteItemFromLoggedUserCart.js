import {useDispatch, useSelector} from "react-redux";
import {removeFromCart} from "../../Redux/Actions/cartActions";
import {useState} from "react";

export default function useDeleteItemFromLoggedUserCart(item) {
    const dispatch = useDispatch();
    const token = useSelector(state => state.userReducer.token);

    const [loading, setLoading] = useState(false);
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(!show);

    const handleDeleteItemFromLoggedUserCart = async () => {
        setLoading(true);
        await dispatch(removeFromCart(item._id, {
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
        handleDeleteItemFromLoggedUserCart,
        handleClose,
        show,
    }
}
import {useDispatch, useSelector} from "react-redux";
import useNotify from "../useNotify";
import {removeFromCart} from "../../Redux/Actions/cartActions";
import {useState} from "react";

export default function useDeleteItemFromLoggedUserCart(item) {
    const dispatch = useDispatch();
    const notify = useNotify();
    const token = useSelector(state => state.userReducer.token);

    const [loading, setLoading] = useState(false);

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
        notify("Item removed from cart successfully", "success");
    }

    return {
        loading,
        handleDeleteItemFromLoggedUserCart,
    }
}
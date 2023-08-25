import {updateItemQuantity} from "../../Redux/Actions/cartActions";
import {useDispatch, useSelector} from "react-redux";
import {useState} from "react";
import useNotify from "../useNotify";

export default function useUpdateItemQuantity(item) {
    const dispatch = useDispatch();
    const notify = useNotify();
    const token = useSelector(state => state.userReducer.token);

    const [quantity, setQuantity] = useState(item.quantity);
    const [loading, setLoading] = useState(false);

    const handleChangeQuantity = (e) => setQuantity(e.target.value);

    const handleUpdateItemQuantity = async () => {
        if(!quantity) return notify("Please enter a valid quantity", "error");
        setLoading(true);
        await dispatch(updateItemQuantity(item._id, {
            body: {
                quantity,
            },
            config: {
                headers: {
                    Authorization: `Bearer ${token}`,
                }
            }
        }));
        setLoading(false);
        notify("Item quantity updated successfully", "success");
    }

    return {
        quantity,
        loading,
        handleChangeQuantity,
        handleUpdateItemQuantity,
    }

}
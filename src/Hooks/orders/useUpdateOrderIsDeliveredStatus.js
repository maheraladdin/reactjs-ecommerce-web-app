import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import useNotify from "../useNotify";
import {getAllOrders, updateOrderDeliveryStatus} from "../../Redux/Actions/orderActions";

export default function useUpdateOrderIsDeliveredStatus(order) {
    const dispatch = useDispatch();
    const notify = useNotify();
    const token = useSelector(state => state.userReducer.token);
    const currentPage = useSelector(state => state.orderReducer.currentPage);
    const [isDelivered, setIsDelivered] = useState(order?.isDelivered);

    const handleIsDeliveredChange = async () => {
        await setIsDelivered(!isDelivered);
        await dispatch(updateOrderDeliveryStatus(order._id, {
            body: {
                isDelivered,
            },
            config: {
                headers: {
                    "Authorization": `Bearer ${token}`,
                }
            }
        }));
        await dispatch(getAllOrders(currentPage || 1, 3, {
            body: {
                headers: {
                    "Authorization": `Bearer ${token}`,
                }
            }
        }));
        notify("Order isDelivered status updated successfully", "success");
    }

    return {isDelivered, handleIsDeliveredChange};
}
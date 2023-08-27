import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import useNotify from "../useNotify";
import {getAllOrders, updateOrderCancelStatus} from "../../Redux/Actions/orderActions";

export default function useUpdateOrderIsCancelledStatus(order) {
    const dispatch = useDispatch();
    const notify = useNotify();
    const token = useSelector(state => state.userReducer.token);
    const currentPage = useSelector(state => state.orderReducer.currentPage);
    const [isCancelled, setIsCancelled] = useState(order?.isCancelled);

    const handleIsCancelledChange = async () => {
        await setIsCancelled(!isCancelled);
        await dispatch(updateOrderCancelStatus(order._id, {
            body: {
                isCancelled,
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
        notify("Order isCancelled status updated successfully", "success");
    }

    return {isCancelled, handleIsCancelledChange};
}
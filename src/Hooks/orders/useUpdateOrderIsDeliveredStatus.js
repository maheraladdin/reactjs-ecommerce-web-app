import {useDispatch, useSelector} from "react-redux";
import {getAllOrders, updateOrderDeliveryStatus} from "../../Redux/Actions/orderActions";

export default function useUpdateOrderIsDeliveredStatus(order) {
    const dispatch = useDispatch();
    const token = useSelector(state => state.userReducer.token);
    const currentPage = useSelector(state => state.orderReducer.currentPage);

    /**
     * @desc    Handle isDelivered change
     * @param   {Boolean} checked - isDelivered status
     * @return  {Promise<void>}
     */
    const handleIsDeliveredChange = async (checked) => {
        await dispatch(updateOrderDeliveryStatus(order._id, {
            body: {
                isDelivered: checked,
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
    }

    return {handleIsDeliveredChange};
}
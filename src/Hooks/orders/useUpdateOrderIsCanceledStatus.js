import {useDispatch, useSelector} from "react-redux";
import {getAllOrders, updateOrderCancelStatus} from "../../Redux/Actions/orderActions";

export default function useUpdateOrderIsCancelledStatus(order) {
    const dispatch = useDispatch();
    const token = useSelector(state => state.userReducer.token);
    const currentPage = useSelector(state => state.orderReducer.currentPage);

    /**
     * @desc    Handle isCancelled change
     * @param   {Boolean}  checked - isCancelled status
     * @return  {Promise<void>}
     */
    const handleIsCancelledChange = async (checked) => {
        await dispatch(updateOrderCancelStatus(order._id, {
            body: {
                isCancelled: checked,
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

    return {handleIsCancelledChange};
}
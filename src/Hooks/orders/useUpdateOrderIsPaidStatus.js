import {useDispatch, useSelector} from "react-redux";
import {getAllOrders, updateOrderPayStatus} from "../../Redux/Actions/orderActions";

export default function useUpdateOrderIsPaidStatus(order) {
    const dispatch = useDispatch();
    const token = useSelector(state => state.userReducer.token);
    const currentPage = useSelector(state => state.orderReducer.currentPage);

    /**
     * @desc    Handle isPaid change
     * @param   {Boolean} checked - isPaid status
     * @return  {Promise<void>}
     */
    const handleIsPaidChange = async (checked) => {
        await dispatch(updateOrderPayStatus(order._id, {
            body: {
                isPaid: checked,
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

    return {handleIsPaidChange};
}
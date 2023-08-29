import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {getAllOrders} from "../../Redux/Actions/orderActions";

export default function useGetAllOrders() {
    const dispatch = useDispatch();
    const token = useSelector(state => state.userReducer.token);
    const orderReducer = useSelector(state => state.orderReducer);
    const {orders, numberOfPages} = orderReducer;


    useEffect(() => {
        if(Object.keys(orders).length > 0) return;
        if(!token) return;
        (async () => {
            await dispatch(getAllOrders(1, 3, {
                body: {
                    headers: {
                        "Authorization": `Bearer ${token}`,
                    }
                }
            }))
        })();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[token]);

    /**
     * @desc    Handle page change for pagination component
     * @param   {Object} page - Selected page
     * @param   {Object} page.selected - Selected page number
     * @return  {Promise<void>}
     */
    const handlePageChange = async (page) => {
        await dispatch(getAllOrders(page.selected + 1, 3, {
            body: {
                headers: {
                    "Authorization": `Bearer ${token}`,
                }
            }
        }))
    }

    return {orders, numberOfPages, handlePageChange};
}
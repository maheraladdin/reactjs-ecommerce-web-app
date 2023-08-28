import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {getOrderById} from "../../Redux/Actions/orderActions";

export default function useGetOrderById() {
    const dispatch = useDispatch();
    const {id} = useParams();
    const token = useSelector(state => state.userReducer.token);
    const order = useSelector(state => state.orderReducer.order);

    useEffect(() => {
        (async () => {
            await dispatch(getOrderById(id, {
                body: {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    }
                }
            }))
        })();
        // eslint-disable-next-line
    },[id, order?.isPaid, order?.isDelivered, order?.isCancelled]);

    return {order};
}
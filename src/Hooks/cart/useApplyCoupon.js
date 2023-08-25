import {useDispatch, useSelector} from "react-redux";
import useNotify from "../useNotify";
import {useState} from "react";
import {applyCoupon} from "../../Redux/Actions/cartActions";

export default function useApplyCoupon() {
    const dispatch = useDispatch();
    const notify = useNotify();
    const token = useSelector(state => state.userReducer.token);
    const cart  = useSelector(state => state.cartReducer.cart);

    const [loading, setLoading] = useState(false);
    const [coupon, setCoupon] = useState("");

    const onChangeCoupon = (e) => setCoupon(e.target.value);

    const handleApplyCoupon = async () => {
        setLoading(true);
        await dispatch(applyCoupon({
            body: {
                name: coupon,
            },
            config: {
                headers: {
                    Authorization: `Bearer ${token}`,
                }
            }
        }));
        setLoading(false);
        notify("Coupon applied successfully", "success");
    }

    return {
        loading,
        handleApplyCoupon,
        onChangeCoupon,
        cart,
    }

}
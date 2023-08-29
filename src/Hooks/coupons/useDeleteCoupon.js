import {useDispatch, useSelector} from "react-redux";
import {useState} from "react";
import {getCouponById, getCoupons, deleteCoupon} from "../../Redux/Actions/couponActions";

export default function useDeleteCoupon() {
    const dispatch = useDispatch();
    const [show, setShow] = useState(false);
    const [loading, setLoading] = useState(false);

    // get the token from redux store
    const token = useSelector(state => state.userReducer.token);
    const coupon = useSelector(state => state.couponReducer.coupon);

    // handle show modal

    /**
     * @desc    set default value for update coupon modal
     * @param   {string} couponId - id of coupon to update
     */
    const setDefault = async (couponId) => {
        await dispatch(getCouponById(couponId, {
            body: {
                headers: {
                    "Authorization": `Bearer ${token}`,
                },
            },
        }));
    }

    /**
     * @desc    handle show modal
     */
    const handleClose = () => setShow(!show);

    /**
     * @desc    handle update coupon
     * @return {Promise<void>}
     */
    const handleDeleteCoupon = async () => {
        setLoading(true)
        await dispatch(deleteCoupon(coupon._id, {
            body: {
                headers: {
                    "Authorization": `Bearer ${token}`
                }
            }
        }));
        await dispatch(getCoupons(1,12, {
            body: {
                headers: {
                    "Authorization": `Bearer ${token}`,
                },
            },
        }));
        setLoading(false);
    }

    return {
        handleDeleteCoupon,
        show,
        handleClose,
        setDefault,
        loading,
    }
}
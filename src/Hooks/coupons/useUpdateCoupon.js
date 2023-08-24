import {useDispatch, useSelector} from "react-redux";
import useNotify from "../useNotify";
import {useEffect, useState} from "react";
import {getCouponById, getCoupons, updateCoupon} from "../../Redux/Actions/couponActions";

export default function useUpdateCoupon() {
    const dispatch = useDispatch();
    const notify = useNotify();
    const [show, setShow] = useState(false);
    const [loading, setLoading] = useState(false);
    const [validated, setValidated] = useState(false);

    // get the token from redux store
    const token = useSelector(state => state.userReducer.token);
    const coupon = useSelector(state => state.couponReducer.coupon);

    // get data from form
    const [name, setName] = useState("");
    const [expireAt, setExpireAt] = useState(new Date());
    const [discount, setDiscount] = useState(0);
    const [maxDiscount, setMaxDiscount] = useState( 0);
    const [maxNumberOfUsage, setMaxNumberOfUsage] = useState(0);

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

    // handle set data from form
    /**
     * @desc    handle set name
     * @param e
     */
    const handleSetName = (e) => setName(e.target.value);

    /**
     * @desc    handle set expire at
     * @param e
     */
    const handleSetExpireAt = (e) => setExpireAt(e.target.value);

    /**
     * @desc    handle set discount
     * @param e
     */
    const handleSetDiscount = (e) => setDiscount(e.target.value);

    /**
     * @desc    handle set max discount
     * @param e
     */
    const handleSetMaxDiscount = (e) => setMaxDiscount(e.target.value);

    /**
     * @desc    handle set max number of usage
     * @param e
     */
    const handleSetMaxNumberOfUsage = (e) => setMaxNumberOfUsage(e.target.value);

    /**
     * @desc    handle update coupon
     * @return {Promise<void>}
     */
    const handleUpdateCoupon = async () => {
        setLoading(true)
        setValidated(true);
        if(!name) {
            notify("Name is required", "error");
            setLoading(false);
            return;
        }
        if(!discount) {
            notify("Discount is required", "error");
            setLoading(false);
            return;
        }
        if(!expireAt) {
            notify("Expire at is required", "error");
            setLoading(false);
            return;
        }
        if((() => {
            const expireAtDate = new Date(expireAt);
            const today = new Date();
            if(expireAtDate < today) {
                notify("Expire at must be greater than today", "error");
                setLoading(false);
                return true;
            }
        })()) return;

        const requestBody = {};
        if(maxNumberOfUsage) requestBody.maxNumberOfUsage = maxNumberOfUsage;
        if(maxDiscount) requestBody.maxDiscount = maxDiscount;
        await dispatch(updateCoupon(coupon._id, {
            body: {
                name,
                expireAt,
                discount,
                ...requestBody,
            },
            config: {
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
        setValidated(false);
    }

    useEffect(() => {
        if(!Object.keys(coupon).length) return;
        setName(coupon.name);
        setExpireAt(new Date(coupon.expireAt).toISOString().split("T")[0]);
        setDiscount(coupon.discount);
        if(coupon.maxDiscount) setMaxDiscount(coupon.maxDiscount);
        if(coupon.maxNumberOfUsage) setMaxNumberOfUsage(coupon.maxNumberOfUsage);
        else setMaxNumberOfUsage(0);
        // eslint-disable-next-line
    },[coupon]);

    return {
        handleUpdateCoupon,
        name,
        handleSetName,
        expireAt,
        handleSetExpireAt,
        discount,
        handleSetDiscount,
        handleSetMaxNumberOfUsage,
        maxNumberOfUsage,
        handleSetMaxDiscount,
        maxDiscount,
        show,
        handleClose,
        setDefault,
        loading,
        validated,
    }
}
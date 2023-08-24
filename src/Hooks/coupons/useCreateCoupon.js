import {useDispatch, useSelector} from "react-redux";
import {useState} from "react";
import {createCoupon, getCoupons} from "../../Redux/Actions/couponActions";
import useNotify from "../useNotify";

export default function useCreateCoupon() {
    const dispatch = useDispatch();
    const notify = useNotify();
    const [show, setShow] = useState(false);
    const [loading, setLoading] = useState(false);
    const [validated, setValidated] = useState(false);

    // get the token from redux store
    const token = useSelector(state => state.userReducer.token);

    // get data from form
    const [name, setName] = useState("");
    const [expireAt, setExpireAt] = useState("");
    const [discount, setDiscount] = useState(0);
    const [maxDiscount, setMaxDiscount] = useState(0);
    const [maxNumberOfUsage, setMaxNumberOfUsage] = useState(0);

    // handle show modal
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
     * @desc    handle create coupon
     * @return {Promise<void>}
     */
    const handleCreateCoupon = async () => {
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
        await dispatch(createCoupon({
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
        notify("Coupon created successfully", "success");
    }

    return {
        handleCreateCoupon,
        handleSetName,
        handleSetExpireAt,
        handleSetDiscount,
        handleSetMaxNumberOfUsage,
        handleSetMaxDiscount,
        show,
        handleClose,
        loading,
        validated,
    }
}
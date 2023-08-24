import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {getCoupons} from "../../Redux/Actions/couponActions";

export default function useGetCoupons() {
    const dispatch = useDispatch();
    const token = useSelector(state => state.userReducer.token);
    const coupons = useSelector(state => state.couponReducer.coupons);
    const numberOfPages = useSelector(state => state.couponReducer.numberOfPages);
    useEffect(() => {
        (async () => {
            if(token) await dispatch(getCoupons(1,12, {
                    body: {
                        headers: {
                            "Authorization": `Bearer ${token}`,
                        },
                    },
                }));
        })();
        // eslint-disable-next-line
    },[]);

    async function handlePageChange(page) {
        if(token) await dispatch(getCoupons(page,12, {
            body: {
                "Authorization": `Bearer ${token}`,
            },
        }));
    }

    return {
        coupons,
        numberOfPages,
        handlePageChange
    };
}
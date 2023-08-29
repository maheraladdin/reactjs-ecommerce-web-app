import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {getBrands} from "../../Redux/Actions/BrandActions";

/**
 * @description This hook is used to get brands for home page
 * @return {{brands: *, loading: *}}
 */
export default function useGetBrandsHomePage() {
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(false);

    // request 6 brands for home page
    useEffect(() => {
        (async () => {
            setLoading(true);
            await dispatch(getBrands(1, 6));
            setLoading(false);
        })();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    // get brands from redux
    const brands = useSelector(state => state.brandReducer.brands);

    return {loading, brands};
}
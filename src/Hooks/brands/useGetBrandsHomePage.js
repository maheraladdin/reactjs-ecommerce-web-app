import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {getBrands} from "../../Redux/Actions/BrandActions";

/**
 * @description This hook is used to get brands for home page
 * @return {{brands: *, loading: *}}
 */
export default function useGetBrandsHomePage() {
    const dispatch = useDispatch();

    // request 6 brands for home page
    useEffect(() => {
        dispatch(getBrands(1, 6))
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    // get loading status from redux
    const loading = useSelector(state => state.brandReducer.loading);

    // get brands from redux
    const brands = useSelector(state => state.brandReducer.brands);

    return {loading, brands};
}
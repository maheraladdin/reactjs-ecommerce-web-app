import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {getBrands} from "../../Redux/Actions/BrandActions";

/**
 * @description This hook is used to get brands for categories page
 * @return {{numOfPages: (number|*), loading: *, handlePageChange: (function(*): any)}}
 */
export default function useGetBrandsPage() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getBrands(1))
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    // get number of pages from redux
    const numOfPages = useSelector(state => state.brandReducer.numberOfPages);

    // get loading status from redux
    const loading = useSelector(state => state.brandReducer.loading);

    // handle page change
    const handlePageChange = (page) => dispatch(getBrands(page.selected + 1));

    return {loading, numOfPages, handlePageChange};
}
import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {getBrands} from "../../Redux/Actions/BrandActions";

/**
 * @description This hook is used to get brands for categories page
 * @return {{numOfPages: (number|*), loading: *, handlePageChange: (function(*): any)}}
 */
export default function useGetBrandsPage() {
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        (async () => {
            setLoading(true);
            await dispatch(getBrands(1));
            setLoading(false);
        })();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    // get number of pages from redux
    const numOfPages = useSelector(state => state.brandReducer.numberOfPages);

    // handle page change
    const handlePageChange = (page) => dispatch(getBrands(page.selected + 1));

    return {loading, numOfPages, handlePageChange};
}
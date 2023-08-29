import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {getCategories} from "../../Redux/Actions/categoryActions";

/**
 * @description This hook is used to get categories for categories page
 * @return {{numOfPages: (number|*), loading: *, handlePageChange: (function(*): any)}}
 */
export default function useGetCategoriesPage() {
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        (async () => {
            setLoading(true);
            await dispatch(getCategories(1));
            setLoading(false);
        })()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    // get number of pages from redux
    const numOfPages = useSelector(state => state.categoryReducer.numberOfPages);

    // handle page change
    const handlePageChange = (page) => dispatch(getCategories(page.selected + 1));

    return {loading, numOfPages, handlePageChange};
}
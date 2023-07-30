import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {getCategories} from "../../Redux/Actions/categoryActions";

/**
 * @description This hook is used to get categories for categories page
 * @return {{numOfPages: (number|*), loading: *, handlePageChange: (function(*): any)}}
 */
export default function useGetCategoriesPage() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getCategories(1))
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    // get number of pages from redux
    const numOfPages = useSelector(state => state.categoryReducer.numberOfPages);

    // get loading status from redux
    const loading = useSelector(state => state.categoryReducer.loading);

    // handle page change
    const handlePageChange = (page) => dispatch(getCategories(page.selected + 1));

    return {loading, numOfPages, handlePageChange};
}
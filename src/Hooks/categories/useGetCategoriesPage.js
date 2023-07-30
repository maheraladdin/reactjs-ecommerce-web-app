import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {getCategories} from "../../Redux/Actions/categoryActions";

export default function useGetCategoriesPage() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getCategories(1))
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const numOfPages = useSelector(state => state.categoryReducer.numberOfPages);
    const loading = useSelector(state => state.categoryReducer.loading);

    const handlePageChange = (page) => dispatch(getCategories(page.selected + 1));

    return {loading, numOfPages, handlePageChange};
}
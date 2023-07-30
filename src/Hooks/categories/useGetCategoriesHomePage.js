import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {getCategories} from "../../Redux/Actions/categoryActions";

/**
 * @description This hook is used to get categories for home page
 * @return {{categories: *, loading: *}}
 */
export default function useGetCategoriesHomePage() {
    const dispatch = useDispatch();

    // request 6 categories for home page
    useEffect(() => {
        dispatch(getCategories(1, 6))
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    // get loading status from redux
    const loading = useSelector(state => state.categoryReducer.loading);

    // get categories from redux
    const categories = useSelector(state => state.categoryReducer.categories);

    return {loading, categories};
}
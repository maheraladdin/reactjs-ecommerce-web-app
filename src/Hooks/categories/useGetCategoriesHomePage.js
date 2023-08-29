import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {getCategories} from "../../Redux/Actions/categoryActions";

/**
 * @description This hook is used to get categories for home page
 * @return {{categories: *, loading: *}}
 */
export default function useGetCategoriesHomePage() {
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(false);
    // request 6 categories for home page
    useEffect(() => {
        (async () => {
            setLoading(true);
            await dispatch(getCategories(1, 6));
            setLoading(false);
        })()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    // get categories from redux
    const categories = useSelector(state => state.categoryReducer.categories);

    return {loading, categories};
}
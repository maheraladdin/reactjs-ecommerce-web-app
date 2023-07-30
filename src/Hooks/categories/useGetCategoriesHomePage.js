import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {getCategories} from "../../Redux/Actions/categoryActions";

export default function useGetCategoriesHomePage() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getCategories(1, 6))
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const loading = useSelector(state => state.categoryReducer.loading);
    const categories = useSelector(state => state.categoryReducer.categories);

    return [loading, categories];
}
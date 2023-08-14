import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {getCategories} from "../../Redux/Actions/categoryActions";
import {getSubcategories} from "../../Redux/Actions/subcategoryActions";
import {getBrands} from "../../Redux/Actions/BrandActions";

export default function useProductSidebarFilter() {
    const type = "checkbox";
    const dispatch = useDispatch();

    const categories = useSelector(state => state.categoryReducer.categories);
    const subcategories = useSelector(state => state.subcategoryReducer.subcategories);
    const brands = useSelector(state => state.brandReducer.brands);

    const [loadingCategories, setLoadingCategories] = useState(false);
    const [loadingSubcategories, setLoadingSubcategories] = useState(false);
    const [loadingBrands, setLoadingBrands] = useState(false);

    useEffect(() => {
        dispatch(getCategories(1,5));
        dispatch(getSubcategories(1,5));
        dispatch(getBrands(1,5));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const handleSeeMoreCategories = async (e) => {
        e.target.style.display = "none";
        setLoadingCategories(true);
        await dispatch(getCategories(1,Number.MAX_SAFE_INTEGER));
        setLoadingCategories(false);
    }

    const handleSeeMoreSubcategories = async (e) => {
        e.target.style.display = "none";
        setLoadingSubcategories(true);
        await dispatch(getSubcategories(1,Number.MAX_SAFE_INTEGER));
        setLoadingSubcategories(false);
    }

    const handleSeeMoreBrands = async (e) => {
        e.target.style.display = "none";
        setLoadingBrands(true);
        await dispatch(getBrands(1,Number.MAX_SAFE_INTEGER));
        setLoadingBrands(false);
    }


    return {
        type,
        categories,
        subcategories,
        brands,
        handleSeeMoreCategories,
        handleSeeMoreSubcategories,
        handleSeeMoreBrands,
        loadingCategories,
        loadingSubcategories,
        loadingBrands
    }
}
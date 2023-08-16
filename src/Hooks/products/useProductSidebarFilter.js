import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {getCategories} from "../../Redux/Actions/categoryActions";
import {getBrands} from "../../Redux/Actions/BrandActions";
import {
    setQueryString,
    setGreaterPrice,
    setLesserPrice,
    addCategory,
    removeCategory, addBrand, removeBrand, removeCategories, removeBrands
} from "../../Redux/Actions/filterActions";

export default function useProductSidebarFilter() {
    const type = "checkbox";
    const dispatch = useDispatch();

    const categories = useSelector(state => state.categoryReducer.categories);
    const brands = useSelector(state => state.brandReducer.brands);

    const [loadingCategories, setLoadingCategories] = useState(false);
    const [loadingBrands, setLoadingBrands] = useState(false);

    const [priceGreaterThan, setPriceGreaterThan] = useState(0);
    const [priceLessThan, setPriceLessThan] = useState(0);

    const [selectAllCategories, setSelectAllCategories] = useState(true);
    const [selectAllBrands, setSelectAllBrands] = useState(true);

    useEffect(() => {
        dispatch(getCategories(1,5));
        dispatch(getBrands(1,5));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const handleSeeMoreCategories = async (e) => {
        e.target.style.display = "none";
        setLoadingCategories(true);
        await dispatch(getCategories(1,Number.MAX_SAFE_INTEGER));
        setLoadingCategories(false);
    }

    const handleSeeMoreBrands = async (e) => {
        e.target.style.display = "none";
        setLoadingBrands(true);
        await dispatch(getBrands(1,Number.MAX_SAFE_INTEGER));
        setLoadingBrands(false);
    }

    const handlePriceGreaterThan = (e) => {
        setPriceGreaterThan(Number(e.target.value));
    }

    const handlePriceLessThan = (e) => {
        setPriceLessThan(Number(e.target.value));
    }

    const onClickPriceFilter = () => {
        dispatch(setGreaterPrice(priceLessThan));
        dispatch(setLesserPrice(priceGreaterThan));
        dispatch(setQueryString());
    }

    const filterCategories = useSelector(state => state.filterReducer.categories);

    const onCategoryChecked = (e) => {
        if(e.target.checked) {
            dispatch(addCategory(e.target.value));
            if(filterCategories.length > 0) setSelectAllCategories(false);
        }
        else dispatch(removeCategory(e.target.value));
        if(filterCategories.length === 0) setSelectAllCategories(true);
        dispatch(setQueryString());
    }

    const onSelectAllCategories = (e) => {
        if(e.target.checked) {
            dispatch(removeCategories());
            setSelectAllCategories(true);
        }
    }

    const filterBrands = useSelector(state => state.filterReducer.brands);

    const onBrandChecked = async (e) => {
        if(e.target.checked) {
            dispatch(addBrand(e.target.value));
            if(filterBrands.length > 0) setSelectAllBrands(false);
        }
        else dispatch(removeBrand(e.target.value));
        if(filterBrands.length === 0) setSelectAllBrands(true);
        dispatch(setQueryString());
    }

    const onSelectAllBrands = (e) => {
        if(e.target.checked) {
            dispatch(removeBrands());
            setSelectAllBrands(true);
        }
    }


    return {
        type,
        categories,
        brands,
        handleSeeMoreCategories,
        handleSeeMoreBrands,
        loadingCategories,
        loadingBrands,
        handlePriceGreaterThan,
        handlePriceLessThan,
        onClickPriceFilter,
        selectAllCategories,
        selectAllBrands,
        onCategoryChecked,
        onBrandChecked,
        onSelectAllCategories,
        onSelectAllBrands,
    }
}
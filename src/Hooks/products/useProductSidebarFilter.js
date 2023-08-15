import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {getCategories} from "../../Redux/Actions/categoryActions";
import {getBrands} from "../../Redux/Actions/BrandActions";
import {setQueryString, setGreaterPrice, setLesserPrice} from "../../Redux/Actions/filterActions";

export default function useProductSidebarFilter() {
    const type = "checkbox";
    const dispatch = useDispatch();

    const categories = useSelector(state => state.categoryReducer.categories);
    const brands = useSelector(state => state.brandReducer.brands);

    const [loadingCategories, setLoadingCategories] = useState(false);
    const [loadingBrands, setLoadingBrands] = useState(false);

    const [priceGreaterThan, setPriceGreaterThan] = useState(0);
    const [priceLessThan, setPriceLessThan] = useState(0);

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

    const onClickPriceFilter = async () => {
        await dispatch(setGreaterPrice(priceLessThan));
        await dispatch(setLesserPrice(priceGreaterThan));
        await dispatch(setQueryString());
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
        onClickPriceFilter
    }
}
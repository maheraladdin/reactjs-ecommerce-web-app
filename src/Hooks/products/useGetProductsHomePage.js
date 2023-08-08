import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {getMostSoldProducts, getNewestProducts} from "../../Redux/Actions/productActions";
export default function useGetProductsHomePage() {

    const dispatch = useDispatch();
    const [loadingMostSoldProducts, setLoadingMostSoldProducts] = useState(true);
    const mostSoldProducts = useSelector(state => state.productReducer.mostSoldProducts);
    const [loadingNewProducts, setLoadingNewProducts] = useState(true);
    const newProducts = useSelector(state => state.productReducer.newestProducts);

    useEffect(() => {
        if (mostSoldProducts.length === 0) dispatch(getMostSoldProducts());
        if (newProducts.length === 0) dispatch(getNewestProducts());
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]);

    useEffect(() => {
        if(mostSoldProducts.length > 0) setLoadingMostSoldProducts(false);
    }, [mostSoldProducts]);

    useEffect(() => {
        if(newProducts.length > 0) setLoadingNewProducts(false);
    }, [newProducts]);





    return {mostSoldProducts, newProducts, loadingMostSoldProducts, loadingNewProducts};
}
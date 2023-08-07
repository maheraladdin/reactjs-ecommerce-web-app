import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {getMostSoldProducts, getNewestProducts} from "../../Redux/Actions/productActions";
export default function useGetProductsHomePage() {

    const dispatch = useDispatch();

    const mostSoldProducts = useSelector(state => state.productReducer.mostSoldProducts);
    const newProducts = useSelector(state => state.productReducer.newestProducts);

    useEffect(() => {
        dispatch(getMostSoldProducts());
        dispatch(getNewestProducts());
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]);

    return {mostSoldProducts, newProducts};
}
import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {getProducts} from "../../Redux/Actions/productActions";

export default function useGetProductsHomePage() {

    const [mostSoldProducts, setMostSoldProducts] = useState([]);
    const [newProducts, setNewProducts] = useState([]);
    const products = useSelector(state => state.productReducer.products);
    const dispatch = useDispatch();

    useEffect(() => {
        (async () => {
            await dispatch(getProducts(1, 4, "-sold"));
            await setMostSoldProducts([...products]);
            console.log(mostSoldProducts);
            await dispatch(getProducts(1, 4, "-createdAt"));
            await setNewProducts([...products]);
            console.log(newProducts);
        })()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);





    return {mostSoldProducts, newProducts};


}
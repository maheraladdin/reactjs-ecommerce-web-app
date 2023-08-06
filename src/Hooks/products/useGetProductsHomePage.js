import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {getProducts} from "../../Redux/Actions/productActions";

export default function useGetProductsHomePage() {

    const [mostSoldProducts, setMostSoldProducts] = useState([]);
    const [newProducts, setNewProducts] = useState([]);
    const products = useSelector(state => state.productReducer.products);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getProducts(1, Number.MAX_SAFE_INTEGER));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        setMostSoldProducts([...products.sort((a, b) => b.sold - a.sold).slice(0,4)]);
        setNewProducts([...products.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)).slice(0,4)]);
    }, [products]);






    return {mostSoldProducts, newProducts};


}
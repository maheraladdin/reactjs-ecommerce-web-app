import {useEffect, useState} from "react";
import {useSelector, useDispatch} from "react-redux";
import {getProducts} from "../../Redux/Actions/productActions";

export default function useGetProducts() {
    const [loading, setLoading] = useState(true);

    const products = useSelector(state => state.productReducer.products);
    const numberOfPages = useSelector(state => state.productReducer.numberOfPages);
    const dispatch = useDispatch();


    useEffect(() => {
        dispatch(getProducts(1, 10));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    useEffect(() => {
        if (products.length > 0) {
            setLoading(false);
        }
    },[products])

    return { loading, products, numberOfPages }
}
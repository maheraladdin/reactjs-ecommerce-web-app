import {useEffect, useState} from "react";
import {useSelector, useDispatch} from "react-redux";
import {getProducts} from "../../Redux/Actions/productActions";

const numberOfProducts = 12;

/**
 * @desc Custom hook to get products from the store
 * @return {{numberOfPages: (number|*), loading: boolean, products: ([]|*), handlePageChange: (function(*): any)}}
 */
export default function useGetProducts() {
    const [loading, setLoading] = useState(true);

    const products = useSelector(state => state.productReducer.products);
    const numberOfPages = useSelector(state => state.productReducer.numberOfPages);
    const dispatch = useDispatch();


    useEffect(() => {
        dispatch(getProducts(1, numberOfProducts));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    useEffect(() => {
        if (products.length > 0) {
            setLoading(false);
        }
    },[products])

    /**
     * @desc Function to handle page change
     * @param page
     * @return {any}
     */
    const handlePageChange = (page) => dispatch(getProducts(page.selected + 1,numberOfProducts));

    return { loading, products, numberOfPages, handlePageChange }
}
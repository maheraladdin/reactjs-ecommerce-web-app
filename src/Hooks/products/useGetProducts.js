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
    const queryString = useSelector(state => state.filterReducer.queryString);

    useEffect(() => {
        (async () => {
            setLoading(true);
            await dispatch(getProducts(1, numberOfProducts, queryString));
            setLoading(false);
        })();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [queryString])

    useEffect(() => {
        if (!loading) {
            setLoading(false);
        }
    },[loading])

    /**
     * @desc Function to handle page change
     * @param page
     * @return {any}
     */
    const handlePageChange = (page) => dispatch(getProducts(page.selected + 1,numberOfProducts, queryString));

    return { loading, products, numberOfPages, handlePageChange }
}
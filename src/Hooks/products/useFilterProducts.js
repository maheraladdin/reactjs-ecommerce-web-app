import {useEffect} from "react";
import {useDispatch} from "react-redux";
import {getProducts} from "../../Redux/Actions/productActions";

export default function useFilterProducts() {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getProducts(1, 12));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

}
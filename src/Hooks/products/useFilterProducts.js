import {useEffect, useState} from "react";
import {useDispatch} from "react-redux";
import {getProducts} from "../../Redux/Actions/productActions";

export default function useFilterProducts() {
    const [queryString, setQueryString] = useState([]);

    const dispatch = useDispatch();

    useEffect(() => {
        if(queryString.length > 0) {
            dispatch(getProducts(1, 12, queryString.join("&")));
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [queryString]);

    return {
        setQueryString
    }

}
import {useParams} from "react-router-dom";
import {useEffect} from "react";
import {useDispatch} from "react-redux";
import {getProductById} from "../../Redux/Actions/productActions";

export default function useGetProductByID() {
    // get product id from url
    const {id} = useParams();

    // get product from api

    const dispatch = useDispatch();

    useEffect(() => {
        // fetch product from api
        dispatch(getProductById(id));

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
}
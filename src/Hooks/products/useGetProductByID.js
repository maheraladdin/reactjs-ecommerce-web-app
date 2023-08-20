import {useParams} from "react-router-dom";
import {useEffect} from "react";
import {useDispatch} from "react-redux";
import {getProductById} from "../../Redux/Actions/productActions";
import {getReviewsForSpecificProduct} from "../../Redux/Actions/reviewActions";

export default function useGetProductByID() {
    // get product id from url
    const {id} = useParams();

    // get product from api

    const dispatch = useDispatch();

    useEffect(() => {
        // fetch product from api
        dispatch(getProductById(id));
        dispatch(getReviewsForSpecificProduct(id, 1, Number.MAX_SAFE_INTEGER));

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [id]);
}
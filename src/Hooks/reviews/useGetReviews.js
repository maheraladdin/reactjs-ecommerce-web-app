import {useDispatch, useSelector} from "react-redux";
import {getReviewsForSpecificProduct} from "../../Redux/Actions/reviewActions";
import {useParams} from "react-router-dom";

/**
 * @description Custom hook that handles getting reviews for a specific product
 * @return {{reviews: ([]|*), numberOfPages: (number|*), handlePageChange: (function(*): any)}}
 */
export default function useGetReviews() {
    const reviews = useSelector(state => state.reviewReducer.reviews);
    const numberOfPages = useSelector(state => state.reviewReducer.numberOfPages);

    const dispatch = useDispatch();
    const {id} = useParams();
    const handlePageChange = (page) => dispatch(getReviewsForSpecificProduct(id, page.selected + 1, Number.MAX_SAFE_INTEGER));


    return {
        reviews,
        numberOfPages,
        handlePageChange
    }
}
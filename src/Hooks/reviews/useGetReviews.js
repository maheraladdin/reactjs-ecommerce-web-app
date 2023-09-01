import {useDispatch, useSelector} from "react-redux";
import {getReviewsForSpecificProduct} from "../../Redux/Actions/reviewActions";
import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";

/**
 * @description Custom hook that handles getting reviews for a specific product
 * @return {{reviews: ([]|*), numberOfPages: (number|*), handlePageChange: (function(*): any)}}
 */
export default function useGetReviews() {
    const reviews = useSelector(state => state.reviewReducer.reviews);
    const numberOfPages = useSelector(state => state.reviewReducer.numberOfPages);
    const [isReviewed, setIsReviewed] = useState(false);

    const user = useSelector(state => state.userReducer.user);
    const dispatch = useDispatch();
    const {id} = useParams();
    const handlePageChange = (page) => dispatch(getReviewsForSpecificProduct(id, page.selected + 1, Number.MAX_SAFE_INTEGER));

    useEffect(() => {
        for (const review of reviews) {
            if(review.user._id === user._id) return setIsReviewed(true);
        }
        setIsReviewed(false);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[reviews]);

    return {
        reviews,
        numberOfPages,
        handlePageChange,
        user,
        isReviewed,
    }
}
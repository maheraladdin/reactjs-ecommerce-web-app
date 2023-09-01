import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import useNotify from "../useNotify";
import {deleteReview, getReviewsForSpecificProduct, updateReview} from "../../Redux/Actions/reviewActions";
import {useParams} from "react-router-dom";

export default function useUpdateOrDeleteMyReview(reviewId,reviewRate,reviewComment) {

        const dispatch = useDispatch();
        const notify = useNotify();

        const {id} = useParams();
        const token = useSelector(state => state.userReducer.token);


        const [comment, setComment] = useState(reviewComment);
        const [rate, setRate] = useState(reviewRate);
        const [loading, setLoading] = useState(false);
        const [showUpdateModel, setShowUpdateModel] = useState(false);
        const [showDeleteModel, setShowDeleteModel] = useState(false);

        // handle show update model
        const handleShowUpdateModel = () => setShowUpdateModel(!showUpdateModel);

        // handle show delete model
        const handleShowDeleteModel = () => setShowDeleteModel(!showDeleteModel);

        // handle comment change
        const handleCommentChange = (e) => setComment(e.target.value);

        // handle rate change
        const handleRateChange = (newRating) => setRate(newRating);


        // handle update rate
        const handleUpdateReview = async () => {
                if(rate < 1) return notify("Please rate the product", "error");
                setLoading(true);
                await dispatch(updateReview(reviewId, {
                        body: {
                                comment,
                                rating: rate,
                        },
                        config: {
                                headers: {
                                        Authorization: `Bearer ${token}`,
                                }
                        }
                }));
                await dispatch(getReviewsForSpecificProduct(id));
                setLoading(false);
                setShowUpdateModel(false);
        }

        const handleDeleteReview = async () => {
                setLoading(true);
                await dispatch(deleteReview(reviewId, {
                        body: {
                                headers: {
                                        Authorization: `Bearer ${token}`,
                                }
                        }
                }));
                await dispatch(getReviewsForSpecificProduct(id));
                setLoading(false);
        }

        return {
                loading,
                handleRateChange,
                handleCommentChange,
                newComment: comment,
                newRate: rate,
                handleUpdateReview,
                handleDeleteReview,
                showUpdateModel,
                showDeleteModel,
                handleShowUpdateModel,
                handleShowDeleteModel,
        }
}
import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import useNotify from "../useNotify";
import {deleteReview, getReviewsForSpecificProduct, updateReview} from "../../Redux/Actions/reviewActions";
import {useParams} from "react-router-dom";

export default function useUpdateOrDeleteMyReview(reviewId,reviewRate,reviewComment) {

        const [comment, setComment] = useState(reviewComment);
        const [rate, setRate] = useState(reviewRate);
        const [loading, setLoading] = useState(false);
        const [showUpdateModel, setShowUpdateModel] = useState(false);
        const [showDeleteModel, setShowDeleteModel] = useState(false);

        const token = useSelector(state => state.userReducer.token);
        const ReviewStatus = useSelector(state => state.reviewReducer.status);
        const {id} = useParams();
        const notify = useNotify();

        // handle show update model
        const handleShowUpdateModel = () => setShowUpdateModel(!showUpdateModel);

        // handle show delete model
        const handleShowDeleteModel = () => setShowDeleteModel(!showDeleteModel);

        // handle comment change
        const handleCommentChange = (e) => setComment(e.target.value);

        // handle rate change
        const handleRateChange = (newRating) => setRate(newRating);

        const dispatch = useDispatch();

        // handle update rate
        const handleUpdateReview = async () => {
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
                if (ReviewStatus === 200) {
                        notify("Review Updated Successfully", "success");
                }
                else {
                        notify("Something went wrong", "error");
                }
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
                if (ReviewStatus === 200) {
                        notify("Review Deleted Successfully", "success");
                }
                else {
                        notify("Something went wrong", "error");
                }
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
import {useEffect, useState} from "react";
import {createReview, getReviewsForSpecificProduct} from "../../Redux/Actions/reviewActions";
import {useDispatch, useSelector} from "react-redux";
import {useParams} from "react-router-dom";
import useNotify from "../useNotify";

/**
 * @description Custom hook that handles adding a review
 * @return {{handleRateChange: (function(*): void), rate: number, handleCommentChange: (function(*): void), comment: string, loading: boolean, handleAddRate: ((function(): Promise<void>)|*)}}
 */
export default function useAddRate() {

    const [comment, setComment] = useState("");
    const [rate, setRate] = useState(0.0);
    const [loading, setLoading] = useState(false);
    const {id} = useParams();

    const user = useSelector(state => state.userReducer.user);
    const token = useSelector(state => state.userReducer.token);
    const notify = useNotify();

    // handle comment change
    const handleCommentChange = (e) => setComment(e.target.value);

    // handle rate change
    const handleRateChange = (newRating) => setRate(newRating);

    const dispatch = useDispatch();

    // handle add rate
    const handleAddRate = async () => {
        if(!rate) return notify("Please rate the product", "error");
        if(!user) return notify("Please login to add a review", "error");
        setLoading(true);
        await dispatch(createReview({
            body: {
                "rating": rate,
                "comment": comment ? comment : "No comment",
                "product": id,
                "user": user._id,
            },
            config: {
                headers: {
                    "Authorization": `Bearer ${token}`,
                }
            }
        }));
        setLoading(false);
    };

    useEffect(() => {
        if (!loading) {
            setComment("");
            setRate(0);
            dispatch(getReviewsForSpecificProduct(id));
        }
        // eslint-disable-next-line
    }, [loading]);


    return {
        comment,
        rate,
        handleCommentChange,
        handleRateChange,
        handleAddRate,
        loading
    }
}
import {useEffect, useState} from "react";
import {createReview} from "../../Redux/Actions/reviewActions";
import {useDispatch} from "react-redux";
import {useParams} from "react-router-dom";

export default function useAddRate() {
    const [comment, setComment] = useState("");
    const [rate, setRate] = useState(0.0);
    const [loading, setLoading] = useState(false);
    const {id} = useParams();

    const handleCommentChange = (e) => setComment(e.target.value);

    const handleRateChange = (newRating) => {
        console.log("newRating: ", newRating);
        setRate(newRating);
    };

    const dispatch = useDispatch();

    const handleAddRate = async () => {
        setLoading(true);
        // Todo: change user id to the user id from token after implementing auth
        await dispatch(createReview({
            body: {
                "rating": rate,
                "comment": comment,
                "product": id,
                "user": "5f7d5b9b5f3b9b2b1c7d7b1c",
            }
        }));
        setTimeout(() => {
            setLoading(false);
        }, 2000);
        // setLoading(false);
    };

    useEffect(() => {
        if (!loading) {
            setComment("");
            setRate(0);
        }
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
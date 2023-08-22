import {useEffect} from "react";
import {getWishlist} from "../../Redux/Actions/wishlistActions";
import {useDispatch, useSelector} from "react-redux";
import {useParams} from "react-router-dom";

export default function useHandleLoveButtonProductDetails() {
    const dispatch = useDispatch();
    const userReducer = useSelector(state => state.userReducer);
    const {token} = userReducer;
    const {id} = useParams();
    useEffect(()=>{
        dispatch(getWishlist({
            body: {
                headers: {
                    "Authorization": `Bearer ${token} `,
                }
            },
        }));
        // eslint-disable-next-line
    },[id]);
}
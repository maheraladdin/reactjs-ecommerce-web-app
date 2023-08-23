import {useEffect} from "react";
import {getWishlist} from "../../Redux/Actions/wishlistActions";
import {useDispatch, useSelector} from "react-redux";
import {useParams} from "react-router-dom";

let lock = 0;
export default function useHandleLoveButtonProductDetails() {
    const dispatch = useDispatch();
    const userReducer = useSelector(state => state.userReducer);
    const {token} = userReducer;
    const {id} = useParams();
    useEffect(()=>{
        if(token && !lock)
            dispatch(getWishlist({
                body: {
                    headers: {
                        "Authorization": `Bearer ${token} `,
                    }
                },
            }));
        lock += 1;
        // eslint-disable-next-line
    },[id]);
}
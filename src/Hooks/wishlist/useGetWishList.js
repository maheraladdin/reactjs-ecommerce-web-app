import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {getWishlist} from "../../Redux/Actions/wishlistActions";


export default function useGetWishList() {
    const dispatch = useDispatch();
    const userReducer = useSelector(state => state.userReducer);
    const {user, token} = userReducer;
    const wishlist = useSelector(state => state.wishlistReducer.wishlist);
    useEffect(() => {
        if(!token) return;
        if(user.role !== "user") return;
        if(Object.keys(wishlist).length > 0) return;
        (async () => {
                await dispatch(getWishlist({
                    body: {
                        headers: {
                            "Authorization": `Bearer ${token} `,
                        }
                    },
                }));
            // eslint-disable-next-line react-hooks/exhaustive-deps
        })();
        // eslint-disable-next-line
    }, [token,user]);
}
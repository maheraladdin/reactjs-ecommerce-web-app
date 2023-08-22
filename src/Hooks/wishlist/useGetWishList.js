import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {getWishlist} from "../../Redux/Actions/wishlistActions";

let lock = 0;
export default function useGetWishList() {
    const dispatch = useDispatch();
    const userReducer = useSelector(state => state.userReducer);
    const {user, token} = userReducer;
    useEffect(() => {
        if(token && !lock && user.role === "user")
        (async () => {
                await dispatch(getWishlist({
                    body: {
                        headers: {
                            "Authorization": `Bearer ${token} `,
                        }
                    },
                }));
                lock += 1;
        })();
        // eslint-disable-next-line
    }, [token,user]);
}
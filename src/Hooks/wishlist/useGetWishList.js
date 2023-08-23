import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {getWishlist} from "../../Redux/Actions/wishlistActions";


export default function useGetWishList() {
    const dispatch = useDispatch();
    const userReducer = useSelector(state => state.userReducer);
    const {user, token} = userReducer;
    let lock = 0;
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
            // eslint-disable-next-line react-hooks/exhaustive-deps
                lock += 1;
        })();
        // eslint-disable-next-line
    }, [token,user]);
}
import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {getWishlist} from "../../Redux/Actions/wishlistActions";

export default function useGetWishList() {
    const dispatch = useDispatch();
    const userReducer = useSelector(state => state.userReducer);
    const {user, token} = userReducer;
    const [isFetched, setIsFetched] = useState(false);
    useEffect(() => {
        if(token && !isFetched && user.role === "user")
        (async () => {
                await dispatch(getWishlist({
                    body: {
                        headers: {
                            "Authorization": `Bearer ${token} `,
                        }
                    },
                }));
                setIsFetched(true);
        })();
        // eslint-disable-next-line
    }, [token,user]);
}
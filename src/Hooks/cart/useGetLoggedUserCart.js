import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {getCart} from "../../Redux/Actions/cartActions";

export default function useGetLoggedUserCart() {
    const dispatch = useDispatch();
    const token = useSelector(state => state.userReducer.token);
    const cartReducer = useSelector(state => state.cartReducer);
    const { cart } = cartReducer;
    useEffect(() => {
        if(!token) return;
        if(cart.length > 0) return;
        (async () => {
            await dispatch(getCart({
                body: {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    }
                }
            }));
        })();
        // eslint-disable-next-line
    },[token]);

    return {
        cart,
    }
}
import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {addProductToWishlist, deleteProductFromWishlist} from "../../Redux/Actions/wishlistActions";


export default function useLoveButton(product) {
    const dispatch = useDispatch();
    const wishlist = useSelector(state => state.wishlistReducer.wishlist);
    const [isLoved, setIsLoved] = useState(false);
    const userReducer = useSelector(state => state.userReducer);
    const {token} = userReducer;

    useEffect(() => {
        setIsLoved(false);
        wishlist.forEach(wishlistProduct => {
            if(wishlistProduct._id === product._id) setIsLoved(true);
        })
        // eslint-disable-next-line
    },[wishlist]);

    const handleLoveButton = async () => {
        if(isLoved) {
            // delete product from wishlist
            await dispatch(deleteProductFromWishlist(product._id, {
                body: {
                    headers: {
                        "Authorization": `Bearer ${token}`,
                    }
                },
            }));
        }
        else {
            // add product to wishlist
            await dispatch(addProductToWishlist({
                body: {
                    product: product._id,
                },
                config: {
                    headers: {
                        "Authorization": `Bearer ${token}`,
                    }
                }
            }));
        }
    }

    return {
        isLoved,
        handleLoveButton,
    };

}
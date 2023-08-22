import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {addProductToWishlist, deleteProductFromWishlist, getWishlist} from "../../Redux/Actions/wishlistActions";
import {useParams} from "react-router-dom";


export default function useLoveButton(product) {
    const dispatch = useDispatch();
    const wishlist = useSelector(state => state.wishlistReducer.wishlist);
    const [isLoved, setIsLoved] = useState(false);
    const userReducer = useSelector(state => state.userReducer);
    const {token} = userReducer;
    const {id} = useParams();

    useEffect(() => {
        setIsLoved(false);
        wishlist.forEach(wishlistProduct => {
            if(wishlistProduct._id === product._id) setIsLoved(true);
        })
        // eslint-disable-next-line
    },[wishlist])

    useEffect(()=>{
         dispatch(getWishlist({
            body: {
                headers: {
                    "Authorization": `Bearer ${token} `,
                }
            },
        }));
         // eslint-disable-next-line
    },[id])
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
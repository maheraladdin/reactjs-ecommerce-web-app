import {useDispatch, useSelector} from "react-redux";
import useNotify from "../useNotify";
import {useState} from "react";
import {addToCart} from "../../Redux/Actions/cartActions";

export default function useAddItemToLoggedUserCart() {
    const dispatch = useDispatch();
    const notify = useNotify();
    const userReducer = useSelector(state => state.userReducer);
    const {token, user} = userReducer;
    const product = useSelector(state => state.productReducer.product);

    const [loading, setLoading] = useState(false);
    const [selectedColor, setSelectedColor] = useState("");


    const handleAddItemToLoggedUserCart = async () => {
        if (!token) return notify("You need to login first", "error");
        if (user.role === "admin") return notify("Admins can't add items to cart", "error");
        if (product.colors.length && !selectedColor) return notify("You need to select a color first", "error");
        const body = {
            product: product._id,
        }
        if (selectedColor) body.color = selectedColor;
        setLoading(true);
        await dispatch(addToCart({
            body,
            config: {
                headers: {
                    Authorization: `Bearer ${token}`,
                }
            }
        }));
        setLoading(false);
        notify("Item added to cart", "success")
    }

    const onClickSelectColor = (e) => {
        setSelectedColor(e.target.value);
    };

    return {
        handleAddItemToLoggedUserCart,
        onClickSelectColor,
        loading,
        product,
        selectedColor,
    }

}
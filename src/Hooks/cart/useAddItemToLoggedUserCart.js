import {useDispatch, useSelector} from "react-redux";
import useNotify from "../useNotify";
import {useState} from "react";
import {addToCart} from "../../Redux/Actions/cartActions";

export default function useAddItemToLoggedUserCart() {
    const dispatch = useDispatch();
    const notify = useNotify();
    const token = useSelector(state => state.userReducer.token);
    const product = useSelector(state => state.productReducer.product);

    const [loading, setLoading] = useState(false);
    const [selectedColor, setSelectedColor] = useState("");


    const handleAddItemToLoggedUserCart = async () => {
        if(product.colors.length === 0) setSelectedColor("black");
        if (!token) return notify("You need to login first", "error");
        if (!selectedColor) return notify("You need to select a color first", "error");
        setLoading(true);
        await dispatch(addToCart({
            body: {
                product: product._id,
                color: selectedColor,
            },
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
import {useDispatch, useSelector} from "react-redux";
import {useState} from "react";
import {createNewCashOrder} from "../../Redux/Actions/orderActions";
import useNotify from "../useNotify";

export default function useCheckout() {
    const dispatch = useDispatch();
    const notify = useNotify();
    const token = useSelector(state => state.userReducer.token);
    const cart = useSelector(state => state.cartReducer.cart);

    // form states
    const [paymentMethod, setPaymentMethod] = useState("card");
    const [address, setAddress] = useState("");
    const [loading, setLoading] = useState(false);

    // form handlers
    const onChangePaymentMethod = (e) => setPaymentMethod(e.target.value);
    const onChangeAddress = (e) => setAddress(e.target.value);

    const checkout = async () => {
        if(paymentMethod === "cash") {
            if(!token) return notify("Please login to continue", "error");
            if(!cart) return notify("Please add items to your cart", "error");
            if(!address) return notify("Please enter your address", "error");
            setLoading(true);
            await dispatch(createNewCashOrder(cart._id, {
                body: {
                    shippingAddress: address,
                },
                config: {
                    headers: {
                        "Authorization": `Bearer ${token}`,
                    }
                }
            }))
            setLoading(false);
            notify("Order created successfully", "success");
        }
        else if(paymentMethod === "card") alert("card payment is not implemented yet");
    }



    return {
        address,
        onChangePaymentMethod,
        onChangeAddress,
        checkout,
        loading
    }

}
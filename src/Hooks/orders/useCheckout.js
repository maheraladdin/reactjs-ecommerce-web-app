import {useSelector} from "react-redux";
import {useState} from "react";

export default function useCheckout() {
    const cart = useSelector(state => state.cartReducer.cart);
    const {totalCartDiscountedPrice, totalCartPrice} = cart;

    // form states
    const [paymentMethod, setPaymentMethod] = useState("card");
    const [address, setAddress] = useState("");

    // form handlers
    const onChangePaymentMethod = (e) => setPaymentMethod(e.target.value);
    const onChangeAddress = (e) => setAddress(e.target.value);



    return {
        address,
        onChangePaymentMethod,
        onChangeAddress,
    }

}
import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {createNewCashOrder, getAllOrders, createPaymentSession} from "../../Redux/Actions/orderActions";
import useNotify from "../useNotify";

export default function useCheckout() {
    const dispatch = useDispatch();
    const notify = useNotify();
    const token = useSelector(state => state.userReducer.token);
    const cart = useSelector(state => state.cartReducer.cart);
    const orderReducer = useSelector(state => state.orderReducer);
    const {session} = orderReducer;

    // form states
    const [paymentMethod, setPaymentMethod] = useState("card");
    const [address, setAddress] = useState("");
    const [loading, setLoading] = useState(false);

    // form handlers
    const onChangePaymentMethod = (e) => setPaymentMethod(e.target.value);
    const onChangeAddress = (e) => setAddress(e.target.value);

    /**
     * @desc    checkout with cash
     * @return {Promise<void>}
     */
    const checkoutCash = async () => {
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
        await dispatch(getAllOrders(1, 3, {
            body: {
                headers: {
                    "Authorization": `Bearer ${token}`,
                }
            }
        }));
    }

    /**
     * @desc    checkout with card
     * @return {Promise<void>}
     */
    const checkoutCard = async () => {
        await dispatch(createPaymentSession(cart._id, {
            body: {
                shippingAddress: address,
            },
            config: {
                headers: {
                    "Authorization": `Bearer ${token}`,
                }
            }
        }));
    }

    const checkout = async () => {
        if(!token) return notify("Please login to continue", "error");
        if(!cart) return notify("Please add items to your cart", "error");
        if(!address) return notify("Please enter your address", "error");
        setLoading(true);
        switch (paymentMethod) {
            // checkout with cash
            case "cash":
                await checkoutCash();
                break;

            // checkout with card
            case "card":
                await checkoutCard();
                break;

            // checkout with invalid payment method
            default:
                notify("choose valid payment method", "error");
        }
        setLoading(false);
    }

    useEffect(() => {
        if(session?.url) window.location.href = session.url;
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[session]);


    return {
        address,
        onChangePaymentMethod,
        onChangeAddress,
        checkout,
        loading,
        paymentMethod,
    }

}
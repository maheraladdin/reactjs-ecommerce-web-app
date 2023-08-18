import {deleteProduct, getProducts} from "../../Redux/Actions/productActions";
import {useDispatch} from "react-redux";
import {useState} from "react";
import useGetToken from "../auth/useGetToken";

export default function useDeleteProduct(id) {

    const dispatch = useDispatch();
    const [show, setShow] = useState(false);
    const [loading, setLoading] = useState(false)

    const {token} = useGetToken();
    const handleDeleteProduct = async () => {
        setLoading(true)
        await dispatch(deleteProduct(id, {
            body: {
                headers: {
                    "Authorization": `Bearer ${token}`
                }
            }
        }));
        setShow(false);
        await dispatch(getProducts());
        setLoading(false)
    }

    return {
        handleDeleteProduct,
        show,
        setShow,
        loading
    }
}
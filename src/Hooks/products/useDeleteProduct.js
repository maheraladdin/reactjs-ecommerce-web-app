import {deleteProduct, getProducts} from "../../Redux/Actions/productActions";
import {useDispatch} from "react-redux";
import {useState} from "react";

export default function useDeleteProduct(id) {

    const dispatch = useDispatch();
    const [show, setShow] = useState(false);
    const [loading, setLoading] = useState(false)
    const handleDeleteProduct = async () => {
        setLoading(true)
        await dispatch(deleteProduct(id, {
            body: {
                headers: {
                    "Authorization": `Bearer ${process.env.REACT_APP_ADMIN_DEV_TOKEN}`
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
import {deleteProduct, getProducts} from "../../Redux/Actions/productActions";
import {useDispatch, useSelector} from "react-redux";
import {useState} from "react";

export default function useDeleteProduct(id) {

    const dispatch = useDispatch();
    const [show, setShow] = useState(false);
    const [loading, setLoading] = useState(false);

    // get the token from redux store
    const token = useSelector(state => state.userReducer.token);

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
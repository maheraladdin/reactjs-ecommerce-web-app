import {deleteProduct} from "../../Redux/Actions/productActions";
import {useDispatch} from "react-redux";

export default function useDeleteProduct(id) {

    const dispatch = useDispatch();
    const handleDeleteProduct = () => {
        dispatch(deleteProduct(id, {
            config: {
                headers: {
                    "Authorization": `Bearer ${process.env.REACT_APP_ADMIN_DEV_TOKEN}`
                }
            }
        }));
    }

    return {
        handleDeleteProduct,
    }
}
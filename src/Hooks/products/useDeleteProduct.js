import {deleteProduct} from "../../Redux/Actions/productActions";
import {useDispatch} from "react-redux";
import {useState} from "react";

export default function useDeleteProduct(id) {

    const dispatch = useDispatch();
    const [hideCard, setHideCard] = useState(false);
    const [show, setShow] = useState(false);
    const handleDeleteProduct = async () => {
        await dispatch(deleteProduct(id, {
            body: {
                headers: {
                    "Authorization": `Bearer ${process.env.REACT_APP_ADMIN_DEV_TOKEN}`
                }
            }
        }));
        setHideCard(true);
        setShow(false);
        // eslint-disable-next-line no-restricted-globals
        location.reload();
    }

    return {
        handleDeleteProduct,
        hideCard,
        show,
        setShow
    }
}
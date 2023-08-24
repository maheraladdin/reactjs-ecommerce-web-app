import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {deleteAddress} from "../../Redux/Actions/addressActions";

export default function useDeleteAddress(id) {
    const dispatch = useDispatch();
    const token = useSelector(state => state.userReducer.token);
    const [show, setShow] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleClose = () => setShow(!show);

    const handleDeleteAddress = async () => {
        setLoading(true);
        await dispatch(deleteAddress(id, {
            body: {
                headers: {
                    Authorization: `Bearer ${token}`,
                }
            }
        }));
        setLoading(false);
        setShow(false);
    }

    return {
        show,
        handleClose,
        handleDeleteAddress,
        loading
    }
}
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {getAddresses} from "../../Redux/Actions/addressActions";

export default function useGetAddresses() {
    const dispatch = useDispatch();
    const addresses = useSelector(state => state.addressReducer.addresses);
    const token = useSelector(state => state.userReducer.token);

    useEffect(() => {
        token && (async () => {
            await dispatch(getAddresses({
                body: {
                    headers: {
                        "Authorization": `Bearer ${token}`,
                    }
                }
            }));
        })();
        // eslint-disable-next-line
    },[token]);

    return {
        addresses,
    }
}
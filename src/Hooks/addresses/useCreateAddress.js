import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {createAddress} from "../../Redux/Actions/addressActions";
import useNotify from "../useNotify";
import {useNavigate} from "react-router-dom";

export default function useCreateAddress() {
    const dispatch = useDispatch();
    const notify = useNotify();
    const navigate = useNavigate();
    const token = useSelector(state => state.userReducer.token);


    // form validation
    const [validated, setValidated] = useState(false);
    const [loading, setLoading] = useState(false);

    // form fields
    const [address, setAddress] = useState("");
    const [city, setCity] = useState("");
    const [description, setDescription] = useState("");
    const [postalCode, setPostalCode] = useState(0);
    const [phone, setPhone] = useState("");

    // form handlers
    const handleAddressChange = (e) => setAddress(e.target.value);
    const handleCityChange = (e) => setCity(e.target.value);
    const handleDescriptionChange = (e) => setDescription(e.target.value);
    const handlePostalCodeChange = (e) => setPostalCode(e.target.value);
    const handlePhoneChange = (e) => setPhone(e.target.value);

    const handleCreateAddress = async () => {
        setLoading(true);
        setValidated(true);

        // validation layer
        if(!address) {
            notify("Address is required", "error");
            setLoading(false);
            return;
        }
        if(!city) {
            notify("City is required", "error");
            setLoading(false);
            return;
        }
        if(!description) {
            notify("Description is required", "error");
            setLoading(false);
            return;
        }
        if(!postalCode) {
            notify("Postal Code is required", "error");
            setLoading(false);
            return;
        }
        if(!phone) {
            notify("Phone is required", "error");
            setLoading(false);
            return;
        }

        // create address
        await dispatch(createAddress({
            body: {
                alias: address,
                details: description,
                phone,
                city,
                postalCode,
            },
            config: {
                headers: {
                    "Authorization": `Bearer ${token}`,
                }
            }

        }));
        setValidated(false)
        setLoading(false);
        notify("Address created successfully", "success");
        navigate(-1);
    }



    return {
        validated,
        handlePostalCodeChange,
        handlePhoneChange,
        handleDescriptionChange,
        handleCityChange,
        handleAddressChange,
        handleCreateAddress,
        loading,
    }
}
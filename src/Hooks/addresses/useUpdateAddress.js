import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getAddressById, updateAddress} from "../../Redux/Actions/addressActions";
import {useNavigate, useParams} from "react-router-dom";

export default function useUpdateAddress() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const token = useSelector(state => state.userReducer.token);
    const addressObj = useSelector(state => state.addressReducer.address);
    const {id} = useParams();

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

    const handleUpdateAddress = async () => {
        setLoading(true);
        setValidated(true);
        const body = {};

        // validation layer
        if(address) body.alias = address;
        if(city) body.city = city;
        if(description) body.details = description;
        if(postalCode) body.postalCode = postalCode; 
        if(phone) body.phone = phone;

        // create address
        await dispatch(updateAddress(id,{
            body,
            config: {
                headers: {
                    "Authorization": `Bearer ${token}`,
                }
            }
        }));
        setValidated(false);
        setLoading(false);
        navigate(-1);
    }

    useEffect(() => {
            token && (async () => {
            await dispatch(getAddressById(id, {
               body: {
                   headers: {
                       "Authorization": `Bearer ${token}`,
                   }
               }
            }));
            setAddress(addressObj?.alias);
            setCity(addressObj?.city);
            setDescription(addressObj?.details);
            setPostalCode(addressObj?.postalCode);
            setPhone(addressObj?.phone);
        })()
        // eslint-disable-next-line
    },[id,token])



    return {
        validated,
        handlePostalCodeChange,
        postalCode,
        handlePhoneChange,
        phone,
        handleDescriptionChange,
        description,
        handleCityChange,
        city,
        handleAddressChange,
        address,
        handleUpdateAddress,
        loading,
    }
}
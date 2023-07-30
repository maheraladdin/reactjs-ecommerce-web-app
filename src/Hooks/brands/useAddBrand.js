import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createBrand } from "../../Redux/Actions/BrandActions";
import useNotify from "../useNotify";
import AddImage from "../../assets/images/add-image.png";

/**
 * @description this hook is used to add a new brand
 * @return {string,((value: (((prevState: string) => string) | string)) => void),*[],((value: (((prevState: *[]) => *[]) | *[])) => void),*[],null,null,null,null}
 */
export default function useAddBrand() {
    // state of brand name
    const [brandName, setBrandName] = useState("");
    // state of images to be displayed
    const [images, setImages] = useState([AddImage]);
    // state of images to be uploaded
    const [uploadImages, setUploadImages] = useState([]);
    // state of loading status
    const [loading, setLoading] = useState(false);
    // state of form validation
    const [validated, setValidated] = useState(false);
    // state of error message
    const [errorMessage, setErrorMessage] = useState("");

    const dispatch = useDispatch();

    // get the status of the request
    const status = useSelector(state => state.brandReducer.status);

    // get error object
    const error = useSelector(state => state.errorReducer.error);

    // get the notify function
    const notify = useNotify();

    /**
     * @description this function is used to add a new brand to the database after validating the form
     * @param   {Event} e
     * @return  {Promise<number|string|*>}
     */
    const addBrand = async (e) => {
        // prevent the browser from refreshing
        e.preventDefault();

        // check if the form is valid
        setValidated(true);

        // check if the form is empty
        if(!brandName || !uploadImages.length) return notify("Please fill all the fields", "error");

        // create the form data
        const formData = new FormData();
        formData.append("name", brandName);
        formData.append("image", uploadImages[0]);

        // start loading status
        setLoading(true);
        // send the request to the server
        await dispatch(createBrand({
            body: formData,
            config: {
                headers: {
                    "Content-Type": "multipart/form-data",
                    "Authorization": `Bearer ${process.env.REACT_APP_ADMIN_DEV_TOKEN}`
                }
            }
        }));


        // end loading status
        setLoading(false);

    }

    /**
     * @description this function is used to update the state of brand name
     * @param  {Event} e
     * @return {void}
     */
    const onBrandNameChange = (e) => {
        setBrandName(e.target.value)
    };

    // reset the form after adding a new brand
    useEffect(() => {
        if(!loading) {
            // reset the form
            setImages([AddImage]);
            setUploadImages([]);
            setBrandName("");
            setValidated(false);
        }
    },[loading]);

    // show the toast message after adding a new brand or if there is an error
    useEffect(() => {
        if (status === 201) {
            // show the done toast message
            notify("Brand added successfully", "success");
        } else if((error && error.response && error.response.data && error.response.data.message) || (error && error.message)) {
            // show the error toast message
            setErrorMessage(error.response.data.message || error.message);
        }
        // eslint-disable-next-line
    },[status, error]);

    // show the error toast message
    useEffect(() => {
        if(errorMessage)
            notify(errorMessage, "error", {
                onClose: () => setErrorMessage(""), // reset the error message
            });
        // eslint-disable-next-line
    }, [errorMessage]);

    return {
        brandName,
        onBrandNameChange,
        images,
        setImages,
        uploadImages,
        setUploadImages,
        loading,
        validated,
        addBrand
    }
}
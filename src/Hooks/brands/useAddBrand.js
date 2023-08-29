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
    // state of images to be uploaded
    const [uploadImages, setUploadImages] = useState([]);
    const [image, setImage] = useState([AddImage]);
    // state of loading status
    const [loading, setLoading] = useState(false);
    // state of form validation
    const [validated, setValidated] = useState(false);


    const dispatch = useDispatch();

    // get the token from redux store
    const token = useSelector(state => state.userReducer.token);

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

        // check if the brand name is empty
        if(!brandName) return notify("Please fill brand name", "error");

        // check if the image is empty
        if(!uploadImages.length) return notify("Please upload brand image", "error");

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
                    "Authorization": `Bearer ${token}`
                }
            }
        }));


        // end loading status
        setLoading(false);

    }

    /**
     * @description this function is used to update the state of brand name
     * @param  {Event} e - the event object
     * @param  {Object} e.target - the target of the event
     * @param  {string} e.target.value - the value of the input
     * @return {void}
     */
    const onBrandNameChange = (e) => {
        setBrandName(e.target.value)
    };

    // reset the form after adding a new brand
    useEffect(() => {
        if(!loading) {
            // reset the form
            setImage([AddImage])
            setUploadImages([]);
            setBrandName("");
            setValidated(false);
        }
    },[loading]);

    return {
        brandName,
        onBrandNameChange,
        uploadImages,
        setUploadImages,
        loading,
        validated,
        addBrand,
        image,
        setImage
    }
}
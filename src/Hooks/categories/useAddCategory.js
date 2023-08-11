import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createCategory } from "../../Redux/Actions/categoryActions";
import useNotify from "../useNotify";
import AddImage from "../../assets/images/add-image.png";

/**
 * @description this hook is used to add a new category
 * @return {string,((value: (((prevState: string) => string) | string)) => void),*[],((value: (((prevState: *[]) => *[]) | *[])) => void),*[],null,null,null,null}
 */
export default function useAddCategory() {
    // state of category name
    const [categoryName, setCategoryName] = useState("");
    // state of images to be uploaded
    const [uploadImages, setUploadImages] = useState([]);
    const [image, setImage] = useState([AddImage]);
    // state of loading status
    const [loading, setLoading] = useState(false);
    // state of form validation
    const [validated, setValidated] = useState(false);
    // state of error message
    const [errorMessage, setErrorMessage] = useState("");

    const dispatch = useDispatch();

    // get the status of the request
    const status = useSelector(state => state.categoryReducer.status);

    // get error object
    const error = useSelector(state => state.errorReducer.error);

    // get the notify function
    const notify = useNotify();

    /**
     * @description this function is used to add a new category to the database after validating the form
     * @param   {Event} e
     * @return  {Promise<number|string|*>}
     */
    const addCategory = async (e) => {
        // prevent the browser from refreshing
        e.preventDefault();

        // check if the form is valid
        setValidated(true);

        // check if the form is empty
        if(!categoryName || !uploadImages.length) return notify("Please fill all the fields", "error");

        // create the form data
        const formData = new FormData();
        formData.append("name", categoryName);
        formData.append("image", uploadImages[0]);

        // start loading status
        setLoading(true);
        // send the request to the server
        await dispatch(createCategory({
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
     * @description this function is used to update the state of category name
     * @param  {Event} e
     * @return {void}
     */
    const onCategoryNameChange = (e) => {
        setCategoryName(e.target.value)
    };

    // reset the form after adding a new category
    useEffect(() => {
        if(!loading) {
            // reset the form
            setUploadImages([]);
            setCategoryName("");
            setValidated(false);
        }
    },[loading]);

    // show the toast message after adding a new category or if there is an error
    useEffect(() => {
        if (status === 201) {
            // show the done toast message
            notify("Category added successfully", "success");
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
        categoryName,
        onCategoryNameChange,
        uploadImages,
        setUploadImages,
        loading,
        validated,
        addCategory,
        setImage,
        image
    }
}

import AddImage from "../assets/images/add-image.png";
import useNotify from "./useNotify";

/**
 * @desc    This hook is used to upload images and handle them (change, drop, drag over, click, delete, close)
 * @param   {Boolean} multiple - Multiple images or not
 * @param   {Array} images - Array of images
 * @param   {Function} setImages - Function to set images
 * @param   {Array} uploadImages - Array of images to upload
 * @param   {Function} setUploadImages - Function to set images to upload
 * @return  {Object} [show, handleImagesChange, handleImagesDrop, handleImageDragOver, handleImageClick, handleDeleteImage, handleClose]
 */
export default function useUploadImages(multiple = false, images, setImages, uploadImages, setUploadImages) {

    const notify = useNotify();

    /**
     * @desc    This function is used to handle images change
     * @param   {Object} e - Event object
     * @return  {*|void}
     */
    const handleImagesChange = (e) => {
        if (e.target.files) {
            if(e.target.files.length > 5) return notify('You can\'t upload more than 5 images', 'error');
            // in case of canceling the file selection
            if(e.target.files.length === 0) return images ? setImages(images) : setImages([AddImage]);

            // in case of single image selection
            if(!multiple) {
                setImages([URL.createObjectURL(e.target.files[0])])
                setUploadImages([e.target.files[0]]);
                return;
            }

            // in case of multiple image selection
            setImages(images.filter((image) => image !== AddImage));
            const filesArray = [...e.target.files].map((file) => URL.createObjectURL(file));
            setUploadImages((prevImages) => prevImages.concat([...e.target.files]));
            setImages((prevImages) => prevImages.concat(filesArray));
        }
    }

    /**
     * @desc    This function is used to handle images drop
     * @param   {Object} e - Event object
     * @return  {*|void}
     */
    const handleImagesDrop = (e) => {
        //prevent the browser from opening the image
        e.preventDefault();
        e.stopPropagation();

        // in case of single image selection
        e.target.files = e.dataTransfer.files;
        handleImagesChange(e);

    }

    /**
     * @desc        This function is used to handle images drag over
     * @param       {Object} e - Event object
     * @return      {*|void}
     */
    const handleImageDragOver = (e) => {
        //prevent the browser from opening the image
        e.preventDefault();
        e.stopPropagation();
    }

    /**
     * @desc   This function is used to handle image click
     * @param  {Object} e - Event object
     * @return {*|void}
     */
    const handleImageClick = (e) => {
        //prevent the browser from opening the image
        if(e.target.src === AddImage) return;
        e.preventDefault();
        e.stopPropagation();
    }

    /**
     * @desc    This function is used to handle image delete
     * @param   {Object} e - Event object
     * @param   {Number} index - Index of image
     * @return  {*}
     */
    const handleDeleteImage = (e,index) => {
        e.preventDefault();
        if(images.length === 1) return setImages([AddImage]);
        setImages(images.filter((image, i) => i !== index));
        setUploadImages(uploadImages.filter((image, i) => i !== index));
    }

    /**
     * @desc    This function is used to handle close
     */

    return {
        handleImagesChange,
        handleImagesDrop,
        handleImageDragOver,
        handleImageClick,
        handleDeleteImage
    }
}
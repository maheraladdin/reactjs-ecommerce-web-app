import AddImage from "../assets/images/add-image.png";
import useNotify from "./useNotify";

/**
 * @desc    This hook is used to upload images and handle them (change, drop, drag over, click, delete, close)
 * @param   {Array} images - Array of images
 * @param   {Function} setImages - Function to set images
 * @param   {Array} uploadImages - Array of images to upload
 * @param   {Function} setUploadImages - Function to set images to upload
 * @return  {Object} [show, handleImagesChange, handleImagesDrop, handleImageDragOver, handleImageClick, handleDeleteImage, handleClose]
 */
export default function useUploadImage(images, setImages, uploadImages, setUploadImages) {

    const notify = useNotify();

    /**
     * @desc    This function is used to handle images change
     * @param   {Object} e - Event object
     * @return  {*|void}
     */
    const handleImagesChange = (e) => {
        if (!e.target.files) return;

        for(let i = 0; i < e.target.files.length; i++) {
            if(e.target.files[i].size > 1024 * 1024 * 5) {
                notify('You can\'t upload image with size more than 5MB', 'error');
                return;
            }
        }

        setImages([URL.createObjectURL(e.target.files[0])])
        setUploadImages([e.target.files[0]]);

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
     * @return  {*}
     */
    const handleDeleteImage = (e) => {
        e.preventDefault();
        return setImages([AddImage]);
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
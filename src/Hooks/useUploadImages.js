import {useState} from "react";
import AddImage from "../assets/images/add-image.png";

/**
 * @desc   This hook is used to upload images
 * @param   {Boolean} multiple - Multiple images or not
 * @param   {Array} images - Array of images
 * @param   {Function} setImages - Function to set images
 * @param   {Array} uploadImages - Array of images to upload
 * @param   {Function} setUploadImages - Function to set images to upload
 * @return {Array} [show, handleImagesChange, handleImagesDrop, handleImageDragOver, handleImageClick, handleDeleteImage, handleClose]
 */
export default function useUploadImages(multiple = false, images, setImages, uploadImages, setUploadImages) {
    const [show, setShow] = useState(false);

    const handleImagesChange = (e) => {
        if (e.target.files) {
            if(e.target.files.length >= 6) return setShow(true);
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
            const filesArray = Array.from(e.target.files).map((file) => URL.createObjectURL(file));
            setUploadImages((prevImages) => prevImages.concat(e.target.files));
            setImages((prevImages) => prevImages.concat(filesArray));
        }
    }

    const handleImagesDrop = (e) => {
        //prevent the browser from opening the image
        e.preventDefault();
        e.stopPropagation();

        // in case of single image selection
        e.target.files = e.dataTransfer.files;
        handleImagesChange(e);

    }

    const handleImageDragOver = (e) => {
        //prevent the browser from opening the image
        e.preventDefault();
        e.stopPropagation();
    }

    const handleImageClick = (e) => {
        //prevent the browser from opening the image
        if(e.target.src === AddImage) return;
        e.preventDefault();
        e.stopPropagation();
    }

    const handleDeleteImage = (e,index) => {
        e.preventDefault();
        if(images.length === 1) return setImages([AddImage]);
        setImages(images.filter((image, i) => i !== index));
        setUploadImages(uploadImages.filter((image, i) => i !== index));
    }

    const handleClose = () => setShow(false);

    return [
        show,
        handleImagesChange,
        handleImagesDrop,
        handleImageDragOver,
        handleImageClick,
        handleDeleteImage,
        handleClose
    ]
}
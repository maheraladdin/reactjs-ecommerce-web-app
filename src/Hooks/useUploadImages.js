import {useState} from "react";

export default function useUploadImages(setUploadImages) {
    const [images, setImages] = useState([]);
    const maxNumber = 5;

    const onChange = (imageList) => {
        setUploadImages(imageList.map(image => image.file));
        setImages(imageList);
    };

    return {
        images,
        maxNumber,
        onChange
    }
}
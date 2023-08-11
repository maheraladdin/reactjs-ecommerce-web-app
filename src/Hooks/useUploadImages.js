
export default function useUploadImages(setUploadImages, setImages) {
    const maxNumber = 5;

    const onChange = (imageList) => {
        setUploadImages(imageList.map(image => image.file));
        setImages(imageList);
    };

    return {
        maxNumber,
        onChange
    }
}
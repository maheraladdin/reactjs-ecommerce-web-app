import {Modal} from "react-bootstrap";
import AddImage from "../../assets/images/add-image.png";
import {useState} from "react";
import Button from "react-bootstrap/Button";
export default function UploadImage({multiple = false, images, setImages, uploadImages, setUploadImages}) {

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

	return (
		<>
			<input
				type="file"
				name="file"
				id="file"
				className="d-none"
				multiple={multiple}
				onChange={handleImagesChange}
				onClick={(e) => {
					if (images.length >= 6) e.preventDefault();
				}}
			/>
			<label
				className="d-flex gap-3 w-fit-content flex-wrap"
				htmlFor="file"
				onDragOver={handleImageDragOver}
				onDrop={handleImagesDrop}
				role={"button"}
			>
				{images.map((image,index) => {
					return (
						<section className="d-flex flex-column gap-2">
							<img
								key={index}
								src={image}
								alt={`uploaded ${index}`}
								className="img-fluid rounded-3"
								style={{width: "200px", height: "200px", objectFit: "cover"}}
								onClick={handleImageClick}
							/>
							{image !== AddImage ?
								<Button
									variant={"danger"}
									onClick={(e) => handleDeleteImage(e,index)}
									style={{zIndex: 2}}
								>
									Delete
								</Button> : null}
						</section>
					)
				})}
			</label>
			<Modal show={show} onHide={handleClose}>
				<Modal.Header closeButton>
					<Modal.Title>Problem while uploading Photos</Modal.Title>
				</Modal.Header>
				<Modal.Body>You can't upload more than 6 photos</Modal.Body>
				<Modal.Footer>
					<Button variant="secondary" onClick={handleClose}>
						Close
					</Button>
				</Modal.Footer>
			</Modal>
		</>
	)
}
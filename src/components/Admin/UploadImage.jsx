import AddImage from "../../assets/images/add-image.png";
import Button from "react-bootstrap/Button";
import useUploadImage from "../../Hooks/useUploadImage";
import {useState} from "react";
export default function UploadImage({circle = false, uploadImages, setUploadImages, id="file"}) {

	const [images, setImages] = useState([AddImage]);

	const {
		handleImagesChange,
		handleImagesDrop,
		handleImageDragOver,
		handleImageClick,
		handleDeleteImage,
	} = useUploadImage(images, setImages, uploadImages, setUploadImages);

	return (
		<>
			<input
				type="file"
				name="file"
				id={id}
				className="d-none"
				onChange={handleImagesChange}
				onClick={(e) => {
					if (images.length >= 6) e.preventDefault();
				}}
			/>
			<label
				className="d-flex gap-3 w-fit-content flex-wrap"
				htmlFor={id}
				onDragOver={handleImageDragOver}
				onDrop={handleImagesDrop}
				role={"button"}
			>
				{images.map((image,index) => {
					return (
						<section key={id + index} className="d-flex flex-column gap-2">
							<img
								src={image}
								alt={`uploaded ${index}`}
								className={`img-fluid ${circle ? "rounded-circle" : "rounded-3"}"}`}
								style={{width: "200px", height: "200px", objectFit: "cover"}}
								onClick={handleImageClick}
							/>
							{image !== AddImage ?
								<Button
									variant={"danger"}
									onClick={(e) => handleDeleteImage(e)}
									style={{zIndex: 2}}
								>
									Delete
								</Button> : null}
						</section>
					)
				})}
			</label>
		</>
	)
}
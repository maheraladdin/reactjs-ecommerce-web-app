import AddImage from "../../assets/images/add-image.png";
import Button from "react-bootstrap/Button";
import useUploadImage from "../../Hooks/useUploadImage";

export default function UploadImage({circle = false, image, setImage, uploadImages, setUploadImages, id="file"}) {

	const {
		handleImagesChange,
		handleImagesDrop,
		handleImageDragOver,
		handleImageClick,
		handleDeleteImage,
	} = useUploadImage(image, setImage, uploadImages, setUploadImages);

	return (
		<>
			<input
				type="file"
				name="file"
				id={id}
				className="d-none"
				onChange={handleImagesChange}
				onClick={(e) => {
					if (image.length >= 6) e.preventDefault();
				}}
			/>
			<label
				className="d-flex gap-3 w-fit-content flex-wrap"
				htmlFor={id}
				onDragOver={handleImageDragOver}
				onDrop={handleImagesDrop}
				role={"button"}
			>
				<section className="d-flex flex-column gap-2">
					<img
						src={image}
						alt={`product-cover`}
						className={`img-fluid ${circle ? "rounded-circle" : "rounded-3"}"}`}
						style={{width: "200px", height: "200px", objectFit: "cover"}}
						onClick={handleImageClick}
					/>
					{image[0] !== AddImage ?
						<Button
							variant={"danger"}
							onClick={(e) => handleDeleteImage(e)}
							style={{zIndex: 2}}
						>
							Delete
						</Button> : null}
				</section>
			</label>
		</>
	)
}
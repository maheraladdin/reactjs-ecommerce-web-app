import React,{useState} from 'react';
import ImageUploading from 'react-images-uploading';
import Button from "react-bootstrap/Button";
import addImage from "../../assets/images/add-image.png";
import {Col, Row} from "react-bootstrap";

const imageWidth = 200;
const imageHeight = 200;

export function UploadImages() {
	const [images, setImages] = useState([]);
	const maxNumber = 5;

	const onChange = (imageList, addUpdateIndex) => {
		// data for submit
		console.log(imageList, addUpdateIndex);
		imageList.forEach(image => {
			console.log(image['file']);
		});
		setImages(imageList);
	};

	return (
		<ImageUploading
			multiple
			value={images}
			onChange={onChange}
			maxNumber={maxNumber}
			dataURLKey="data_url"
		>
			{({
				  imageList,
				  onImageUpload,
				  onImageRemoveAll,
				  onImageUpdate,
				  onImageRemove,
				  isDragging,
				  dragProps,
			  }) => (
				// write your building UI
				<section className={"d-flex flex-column gap-3"}>
					<Row
						className="d-flex gap-3 flex-wrap justify-content-center"
					>
						{imageList.map((image, index) => (
							<Col
								key={index}
								className="d-flex flex-column justify-content-center align-items-start gap-3"
							>
								<img
									style={{
										width: imageWidth,
										objectFit: "cover",
										height: imageHeight,
									}}
									className="img-fluid rounded-3 border border-2 border-dark"
									src={image['data_url']}
									alt={`uploaded-${index + 1}`}
								/>
								<section className="d-flex justify-content-between"
									style={{
										width: imageWidth,
									}}
								>
									<Button className={"w-fit-content"} variant={"primary"} onClick={() => onImageUpdate(index)}>Update</Button>
									<Button className={"w-fit-content"} variant={"danger"} onClick={() => onImageRemove(index)}>Remove</Button>
								</section>
							</Col>
						))}
					</Row>
					<section
						style={isDragging ? { border: "1px solid red" } : undefined}
						onClick={onImageUpload}
						{...dragProps}
						role={"button"}
						className="w-fit-content"
					>
						<img
							style={{
								width: imageWidth,
								objectFit: "cover",
								height: imageHeight,
							}}
							className={`img-fluid ${images.length >= 5 && "d-none"}`}
							src={addImage}
							alt="add image avater"
						/>
					</section>
					<Button variant={"outline-danger"} className={`w-100 ${images.length < 2 && "d-none"}`} onClick={onImageRemoveAll}>Remove all images</Button>
				</section>
			)}
		</ImageUploading>
	);
}
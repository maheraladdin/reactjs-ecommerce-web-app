import React from 'react';
import ImageUploading from 'react-images-uploading';
import Button from "react-bootstrap/Button";
import addImage from "../../assets/images/add-image.png";
import {Col, Row} from "react-bootstrap";
import useUploadImages from "../../Hooks/useUploadImages";

const imageWidth = 200;
const imageHeight = 200;

export function UploadImages({setUploadImages,images,setImages}) {

	const {maxNumber, onChange} = useUploadImages(setUploadImages,setImages);

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
									style={{
										minWidth: imageWidth,
									}}
								>
									<img
										style={{
											width: imageWidth,
											objectFit: "cover",
											height: imageHeight,
										}}
										className="img-fluid rounded-3 border border-2 border-dark"
										src={image['data_url'] || image}
										alt={`uploaded-${index + 1}`}
									/>
									<section className="d-flex justify-content-between"
											 style={{
												 width: imageWidth,
											 }}
									>
										<Button className={"w-fit-content"} variant={"primary"}
												onClick={() => onImageUpdate(index)}>Update</Button>
										<Button className={"w-fit-content"} variant={"danger"}
												onClick={() => onImageRemove(index)}>Remove</Button>
									</section>
								</Col>
							))}
							<Col
								onClick={onImageUpload}
								{...dragProps}
								role={"button"}
								className={`${isDragging && "border border-2 border-danger"} align-self-center`}
								style={{
									minWidth: imageWidth,
								}}
							>
								<img
									style={{
										width: imageWidth,
										objectFit: "cover",
										height: imageHeight,
									}}
									className={`img-fluid ${images.length >= 5 && "d-none"}`}
									src={addImage}
									alt="add"
								/>
							</Col>
						</Row>
						<Button variant={"outline-danger"} className={`w-100 ${images.length < 2 && "d-none"}`}
								onClick={() => onImageRemoveAll}>Remove all images</Button>
					</section>
				)
			}
		</ImageUploading>
	);
}
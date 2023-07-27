import React, {useState} from "react";
import {Col, Row} from "react-bootstrap";
import Button from "react-bootstrap/Button";
import ImageUploading from "react-images-uploading";

export default function UploadImage({multiple}) {

	const [images, setImages] = useState([]);
	const maxNumber = 69;

	const onChange = (imageList, addUpdateIndex) => {
		// data for submit
		console.log(imageList, addUpdateIndex);
		setImages(imageList);
	};

	return (
		<ImageUploading
			multiple={multiple || false}
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
				<div>
					<section className="d-flex flex-column gap-3">
						<section
							style={{
								width: "100%",
								height: "300px",
							}}
							onClick={onImageUpload}
							{...dragProps}
							className={`border border-3 border-primary rounded-3 d-flex align-items-center justify-content-center ${isDragging ? 'border-danger' : ''}`}
							role={"button"}
						>
							<section className={`text-primary ${isDragging ? 'text-danger' : ''} fa-solid fa-file-arrow-up fa-bounce fa-2xl`}></section>
						</section>
						{imageList.length > 0 ? <Row className="align-items-center border border-3 border-primary rounded-3">
							{imageList.map((image, index) => (
								<Col
									sm={12}
									md={6}
									lg={4}
									key={index}
									className="d-flex flex-column gap-3 p-3 w-fit-content rounded-3">
									<section>
										<img className="rounded-3" src={image['data_url']} alt=""
											 width="200px"/>
									</section>
									<section
										style={{
											width: "200px",
										}}
										className="d-flex justify-content-between">
										<Button onClick={() => onImageUpdate(index)}>Update</Button>
										<Button variant={"danger"}
												onClick={() => onImageRemove(index)}>Remove</Button>
									</section>
								</Col>
							))}
						</Row> : null}
						<Button variant={"danger"} onClick={onImageRemoveAll}>Remove all images</Button>
					</section>
				</div>
			)}
		</ImageUploading>
	)
}
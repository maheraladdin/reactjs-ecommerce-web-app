import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import UploadImage from "./UploadImage";
import {useState} from "react";
import AddImage from "../../assets/images/add-image.png";

export default function AdminAddBrand() {

	const [images, setImages] = useState([AddImage]);
	const [uploadImages, setUploadImages] = useState([]);

	return (
		<>
			<section>
				<UploadImage images={images} setImages={setImages} setUploadImages={setUploadImages} uploadImages={uploadImages} />
			</section>
			<Form className="my-3">
				<Form.Control type="text" placeholder="Brand Name" />
			</Form>
			<section className="d-flex justify-content-end">
				<Button variant="outline-success"> Add Brand </Button>
			</section>
		</>
	)
}
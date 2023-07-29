import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import UploadImage from "./UploadImage";
import {useEffect, useState} from "react";
import AddImage from "../../assets/images/add-image.png";
import {createCategory} from "../../Redux/Actions/categoryActions";
import {useDispatch} from "react-redux";
import {Spinner} from "react-bootstrap";

export default function AdminAddCategory() {
	const [categoryName, setCategoryName] = useState("");
	const [images, setImages] = useState([AddImage]);
	const [uploadImages, setUploadImages] = useState([]);
	const [loading, setLoading] = useState(false);

	const dispatch = useDispatch();

	// post the category to the server
	const addCategory = async () => {
		const formData = new FormData();
		formData.append("name", categoryName);
		formData.append("image", uploadImages[0]);
		setLoading(true);
		await dispatch(createCategory({
			body: formData,
			config: {
				headers: {
					"Content-Type": "multipart/form-data",
					"Authorization": `Bearer ${process.env.REACT_APP_ADMIN_DEV_TOKEN}`
				}
			}
		}));
		setLoading(false);
	}

	useEffect(() => {
		if(!loading) {
			setImages([AddImage]);
			setUploadImages([]);
			setCategoryName("");
		}
	},[loading]);

	return (
		<>
			<section>
				<UploadImage setImages={setImages} images={images} uploadImages={uploadImages} setUploadImages={setUploadImages} />
			</section>
			<Form className="my-3">
				<Form.Group className="mb-3" controlId="CategoryName">
					<Form.Label role={"button"}>Category Name</Form.Label>
					<Form.Control
						type="text"
						value={categoryName}
						placeholder="Category Name"
						onChange={(e) => setCategoryName(e.target.value)}
					/>
				</Form.Group>
			</Form>
			<section className="d-flex justify-content-end">
				<Button onClick={addCategory} variant="outline-success">
					<Spinner animation="border" size={"sm"} variant="success" className={`align-self-center me-2 ${loading ? "d-inline-block" : "d-none"}`} />
					Add Category
				</Button>
			</section>
		</>
	)
}
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import UploadImage from "../utility/UploadImage";
import {Spinner} from "react-bootstrap";
import useAddCategory from "../../Hooks/categories/useAddCategory";

export default function AdminAddCategory() {

	const {
		categoryName,
		onCategoryNameChange,
		uploadImages,
		setUploadImages,
		loading,
		validated,
		addCategory,
		image,
		setImage
	} = useAddCategory();

	return (
		<>
			<section>
				<UploadImage circle={true} image={image} setImage={setImage} uploadImages={uploadImages} setUploadImages={setUploadImages} />
			</section>
			<Form validated={validated} className="my-3 d-flex flex-column">
				<Form.Group className="mb-3" controlId="CategoryName">
					<Form.Label role={"button"}>Category Name</Form.Label>
					<Form.Control
						required
						type="text"
						value={categoryName}
						placeholder="Category Name"
						onChange={onCategoryNameChange}
					/>
				</Form.Group>
				<Button onClick={addCategory} className="align-self-end" variant="outline-success">
					<Spinner animation="border" size={"sm"} variant="success" className={`align-self-center me-2 ${loading ? "d-inline-block" : "d-none"}`} />
					Add Category
				</Button>
			</Form>
		</>
	)
}
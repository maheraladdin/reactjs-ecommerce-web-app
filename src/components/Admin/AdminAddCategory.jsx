import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import UploadImage from "./UploadImage";
import {Spinner} from "react-bootstrap";
import useAddCategory from "../../Hooks/categories/useAddCategory";
import {ToastContainer} from "react-toastify";

export default function AdminAddCategory() {

	const {
		categoryName,
		onCategoryNameChange,
		uploadImages,
		setUploadImages,
		loading,
		validated,
		addCategory
	} = useAddCategory();

	return (
		<>
			<section>
				<UploadImage circle={true} uploadImages={uploadImages} setUploadImages={setUploadImages} />
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
			<ToastContainer
				position="top-right"
				autoClose={5000}
				hideProgressBar={false}
				newestOnTop={true}
				closeOnClick={true}
				rtl={false}
				pauseOnFocusLoss={false}
				draggable={true}
				pauseOnHover={false}
				limit={1}
			/>
		</>
	)
}
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import UploadImage from "./UploadImage";
import useAddBrand from "../../Hooks/brands/useAddBrand";
import {Spinner} from "react-bootstrap";
import {ToastContainer} from "react-toastify";

export default function AdminAddBrand() {

	const {
		brandName,
		onBrandNameChange,
		uploadImages,
		setUploadImages,
		loading,
		validated,
		addBrand
	} = useAddBrand()

	return (
		<>
			<section>
				<UploadImage uploadImages={uploadImages} setUploadImages={setUploadImages} />
			</section>
			<Form validated={validated} className="my-3 d-flex flex-column">
				<Form.Group className="mb-3" controlId="BrandName">
					<Form.Label role={"button"}>Brand Name</Form.Label>
					<Form.Control
						required
						type="text"
						value={brandName}
						placeholder="Brand Name"
						onChange={onBrandNameChange}
					/>
				</Form.Group>
				<Button onClick={addBrand} className="align-self-end" variant="outline-success">
					<Spinner animation="border" size={"sm"} variant="success" className={`align-self-center me-2 ${loading ? "d-inline-block" : "d-none"}`} />
					Add Brand
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
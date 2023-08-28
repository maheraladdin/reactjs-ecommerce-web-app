import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import UploadImage from "../utility/UploadImage";
import useAddBrand from "../../Hooks/brands/useAddBrand";
import {Spinner} from "react-bootstrap";

export default function AdminAddBrand() {

	const {
		brandName,
		onBrandNameChange,
		uploadImages,
		setUploadImages,
		loading,
		validated,
		addBrand,
		image,
		setImage
	} = useAddBrand()

	return (
		<>
			<section>
				<UploadImage image={image} setImage={setImage} uploadImages={uploadImages} setUploadImages={setUploadImages} />
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
		</>
	)
}
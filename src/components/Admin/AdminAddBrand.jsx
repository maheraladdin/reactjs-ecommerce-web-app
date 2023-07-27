import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import UploadImage from "./UploadImage";

export default function AdminAddBrand() {

	return (
		<>
			<section>
				<UploadImage />
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
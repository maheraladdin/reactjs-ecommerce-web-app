import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export default function AdminAddSubcategory() {
	return (
		<Form className="d-flex flex-column gap-3">
			<Form.Group controlId="Subcategory">
				<Form.Label>Subcategory Name</Form.Label>
				<Form.Control type="text" placeholder="Enter Subcategory Name" />
			</Form.Group>
			<Form.Group controlId="Category">
				<Form.Label>Category</Form.Label>
				<Form.Select aria-label="Category">
					{
						Array(6).fill(0).map((_, index) => (
						<option key={index} value={index}>Category {index + 1}</option>
						))
					}
				</Form.Select>
			</Form.Group>
			<Form.Group className="d-flex justify-content-end" controlId="formBasicEmail">
				<Button variant="outline-success">Add Subcategory</Button>
			</Form.Group>
		</Form>
	)
}
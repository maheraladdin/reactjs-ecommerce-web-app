import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import useAddSubcategory from "../../Hooks/subCategories/useAddSubcategory";
import {Spinner} from "react-bootstrap";

export default function AdminAddSubcategory() {
	const {loading ,validated ,handleAddSubcategory ,subcategoryName ,handleSelectedCategoryIdChange ,categories ,handleSubcategoryNameChange} = useAddSubcategory();
	return (
		<>
			<Form validated={validated} className="d-flex flex-column gap-3">
				<Form.Group controlId="Subcategory">
					<Form.Label>Subcategory Name</Form.Label>
					<Form.Control required type="text" value={subcategoryName} onChange={handleSubcategoryNameChange} placeholder="Enter Subcategory Name"  />
				</Form.Group>
				<Form.Group controlId="Category">
					<Form.Label>Category</Form.Label>
					<Form.Select required onChange={handleSelectedCategoryIdChange} aria-label="Category">
						<option value={""}>Choose Category</option>
						{
							categories.map((category, index) => (
							<option key={index + 1} value={category._id}>{category.name}</option>
							))
						}
					</Form.Select>
				</Form.Group>
				<Form.Group className="d-flex justify-content-end" controlId="formBasicEmail">
					<Button variant="outline-success" onClick={handleAddSubcategory}>
						{loading ? <Spinner className="me-2" animation="border" variant="success" size="sm" /> : null}
						Add Subcategory
					</Button>
				</Form.Group>
			</Form>
		</>
	)
}
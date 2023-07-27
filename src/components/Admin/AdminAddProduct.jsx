import UploadImage from "./UploadImage";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import {MultiSelect} from "react-multi-select-component";
import {useState} from "react";

export default function AdminAddProduct() {

	const options = [
		{ label: "Subcategory 1", value: "Category-1" },
		{ label: "Subcategory 2", value: "Category-2" },
		{ label: "Subcategory 3", value: "Category-3"},
	];

	const colors = [
		"red",
		"blue",
		"green",
	];

	const [selected, setSelected] = useState([]);

	return (
		<>
			<section>
				<UploadImage multiple={true} />
			</section>
			<Form className="my-3 d-flex flex-column gap-3">
				<Form.Group controlId="productName">
					<Form.Label>Product Name</Form.Label>
					<Form.Control type="text" placeholder="Product Name" />
				</Form.Group>
				<Form.Group controlId="productDescription">
					<Form.Label>Product Description</Form.Label>
					<Form.Control className="resize-none" as="textarea" rows={3} placeholder="Product Description" />
				</Form.Group>
				<Form.Group controlId="productPrice">
					<Form.Label>Product Price</Form.Label>
					<Form.Control className="resize-none" as="textarea" rows={3} placeholder="Product Price" />
				</Form.Group>
				<Form.Group controlId="productDiscountedPrice">
					<Form.Label>Product Discounted Price</Form.Label>
					<Form.Control className="resize-none" as="textarea" rows={3} placeholder="Product Discounted Price" />
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

				<Form.Group controlId="Subcategory">
					<Form.Label>Subcategory</Form.Label>
					<MultiSelect
						options={options}
						value={selected}
						onChange={setSelected}
						labelledBy="Subcategory"
					/>
				</Form.Group>

				<Form.Group controlId="Brand">
					<Form.Label>Brand</Form.Label>
					<Form.Select aria-label="Brand">
						{
							Array(6).fill(0).map((_, index) => (
								<option key={index} value={index}>Brand {index + 1}</option>
							))
						}
					</Form.Select>
				</Form.Group>

				<Form.Group controlId="Colors">
					<Form.Label>Colors</Form.Label>
					<section className="d-flex gap-1">
					{
						colors.map((color, index) => (
							<section
								key={index}
								role="button"
								className="rounded-circle"
								style={{
								width: "35px",
								height: "35px",
								backgroundColor: color,
							}}>

							</section>
						))
					}
						<section
							role="button"
							className="bg-light rounded-circle d-flex justify-content-center align-items-center border border-1 border-dark"
							style={{
								width: "35px",
								height: "35px",
							}}
						>
							<section className="fa-solid fa-plus"></section>
						</section>
					</section>
				</Form.Group>
			</Form>
			<section className="d-flex justify-content-end">
				<Button variant="outline-success"> Add Product </Button>
			</section>
		</>
	)
}
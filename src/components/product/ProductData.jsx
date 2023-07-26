import Form from "react-bootstrap/Form";
import {Badge} from "react-bootstrap";
import Button from "react-bootstrap/Button";

export function ProductData() {
	const colors = ["red","green","blue"]
	return (
		<Form className="d-flex flex-column gap-2 bg-light p-5 rounded-5">
			<Form.Label>Category:</Form.Label>
			<Form.Text>Product title</Form.Text>
			<Form.Label><i className="fa-solid fa-star text-warning"></i> 4.5 (quantity: 100)</Form.Label>
			<Form.Text>brand: <span className="h4 text-dark">Samsung</span></Form.Text>
			<Form.Group className="d-flex gap-1 py-2">
			{
				colors.map((color,i) => {
					return (
						<section
							key={i + 1}
							className="rounded-circle border border-1 border-light"
							style={{
								width: "30px",
								height: "30px",
								backgroundColor: color
							}}
						>

						</section>
					)
				})
			}
			</Form.Group>
			<Form.Label>
				Product Description:
			</Form.Label>
			<Form.Text>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus tincidunt massa sem, at bibendum dolor vestibulum ut. Nunc suscipit a leo quis consectetur. Phasellus cursus laoreet urna id feugiat. Mauris eget consectetur orci, eu accumsan augue. Suspendisse eleifend massa nec imperdiet aliquet. Praesent aliquet at diam sit amet ultricies. Maecenas et erat ipsum. Morbi volutpat tempus erat, id molestie nibh. Etiam porta tempor congue. Nulla feugiat et eros non ultricies.
			</Form.Text>
			<Form.Group className="d-flex flex-wrap h2 gap-3 pt-2">
				<Badge>1000 EGP</Badge>
				<Button variant="outline-danger"><i className="fa-solid fa-heart"></i></Button>
				<Button variant="outline-dark"><i className="fa-solid fa-cart-plus"></i></Button>
			</Form.Group>
		</Form>
	)
}
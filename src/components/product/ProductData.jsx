import Form from "react-bootstrap/Form";
import {Badge} from "react-bootstrap";
import Button from "react-bootstrap/Button";
import {useSelector} from "react-redux";

export function ProductData() {
	const product = useSelector(state => state.productReducer.product)
	return (
		<Form className="d-flex flex-column gap-2 bg-light p-5 rounded-5 h-100">
			<Form.Label>{product && product.category && product.category.name}:</Form.Label>
			<Form.Text>{product && product.title}</Form.Text>
			<Form.Label><i className="fa-solid fa-star text-warning"></i> {product && product.ratingsAverage} (quantity: {product.ratingsQuantity})</Form.Label>
			{product && product.brand && product.brand.name && <Form.Text>brand: <span className="h4 text-dark">{product.brand.name}</span></Form.Text>}
			<Form.Group className="d-flex gap-1 py-2">
			{
				product && product.colors && product.colors.map((color,i) => {
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
				{product && product.description}
			</Form.Text>
			<Form.Group className="d-flex flex-wrap h2 gap-3 pt-2">
				{	!product.discountedPrice ?
					(<Badge>{product && product.price} EGP</Badge>)
					: (<>
						<Badge bg="danger"><del>{product && product.price} EGP</del></Badge>
						<Badge>{product && product.discountedPrice} EGP</Badge>
					</>)
				}
			</Form.Group>
			<Form.Group className="d-flex gap-3">
				<Button variant="outline-danger"><i className="fa-solid fa-heart"></i></Button>
				<Button variant="outline-dark"><i className="fa-solid fa-cart-plus"></i></Button>
			</Form.Group>
		</Form>
	)
}
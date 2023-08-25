import Form from "react-bootstrap/Form";
import {Badge, Spinner} from "react-bootstrap";
import Button from "react-bootstrap/Button";
import {ProductLoveButton} from "./ProductLoveButton";
import useAddItemToLoggedUserCart from "../../Hooks/cart/useAddItemToLoggedUserCart";

export function ProductData() {
	const {
		handleAddItemToLoggedUserCart,
		onClickSelectColor,
		loading,
		product,
		selectedColor,
	} = useAddItemToLoggedUserCart();
	return (
		<Form className="d-flex flex-column gap-2 bg-light p-5 rounded-5 h-100">
			<Form.Label>{product?.category?.name}:</Form.Label>
			<Form.Text>{product?.title}</Form.Text>
			<Form.Label><i className="fa-solid fa-star text-warning"></i> {product?.ratingsAverage} (quantity: {product?.ratingsQuantity})</Form.Label>
			{product?.brand?.name && <Form.Text>brand: <span className="h4 text-dark">{product.brand.name}</span></Form.Text>}
			<Form.Group className="d-flex gap-1 py-2">
			{
				product?.colors?.map((color,i) => {
					return (
						<Form.Group key={`select-color-${i + 1}`}>
							<Form.Label
								className="rounded-circle border border-1 border-light d-flex justify-content-center align-items-center"
								style={{
									width: "30px",
									height: "30px",
									backgroundColor: color
								}}
								role={"button"}
								htmlFor={`form-radio-${i + 1}`}
							>
								{selectedColor === color && <i className="fa-solid fa-check text-success"></i>}
							</Form.Label>
							<Form.Control onClick={onClickSelectColor} id={`form-radio-${i + 1}`} type={"radio"} name={"color"} value={color} className={"d-none"}/>
						</Form.Group>
					)
				})
			}
			</Form.Group>
			<Form.Label>
				Product Description:
			</Form.Label>
			<Form.Text>
				{product?.description}
			</Form.Text>
			<Form.Group className="d-flex flex-wrap h2 gap-3 pt-2">
				{	!product?.discountedPrice ?
					(<Badge>{product?.price} EGP</Badge>)
					: (<>
						<Badge bg="danger"><del>{product?.price} EGP</del></Badge>
						<Badge>{product?.discountedPrice} EGP</Badge>
					</>)
				}
			</Form.Group>
			<Form.Group className="d-flex gap-3">
				<ProductLoveButton absolute={false} product={product}/>
				<Button onClick={handleAddItemToLoggedUserCart} variant="outline-dark" disabled={loading}>
					{
						loading ?
							<Spinner animation="border" variant="dark" size="sm" />
						:
							<i className="fa-solid fa-cart-plus"></i>
					}
				</Button>
			</Form.Group>
		</Form>
	)
}
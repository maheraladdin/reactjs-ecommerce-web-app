import {Badge, Col, Row} from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import useUpdateItemQuantity from "../../Hooks/cart/useUpdateItemQuantity";
import useDeleteItemFromLoggedUserCart from "../../Hooks/cart/useDeleteItemFromLoggedUserCart";
import DeleteItemFromLoggedUserCartModel from "./DeleteItemFromLoggedUserCartModel";

export default function CartItem({item}) {
	console.log(item);
	const {
		quantity,
		loading,
		handleChangeQuantity,
		handleUpdateItemQuantity,
	} = useUpdateItemQuantity(item);

	const {show, handleClose} = useDeleteItemFromLoggedUserCart(item);
	return (
		<Row className="bg-light p-3 rounded-3 gap-3 gap-md-0">
			<Col
				xs={12}
				md={3}
			>
				<img
					src={item?.product?.imageCover}
					alt="logo"
					className="bg-white p-3 rounded-3 w-100"
					loading={"lazy"}
				/>
			</Col>
			<Col
				xs={12}
				md={9}
				className="d-flex flex-column gap-2"
			>
				<section className="d-flex justify-content-between align-items-center">
					<section>{item?.product?.category?.name}</section>
					<Button onClick={handleClose} variant="outline-danger">
						Delete
					</Button>
				</section>
				<section>Product: {item?.product?.title}</section>
				{item?.product?.brand?.name && <section>Brand: {item?.product?.brand?.name}</section>}
				{item?.color && <section className="d-flex align-items-center gap-3">
					<section>Color:</section>
					<section className="rounded-circle" style={{
						width: "30px",
						height: "30px",
						backgroundColor: item?.color,
					}}></section>
				</section>}
				<section className="d-flex justify-content-between align-items-center flex-wrap gap-2">
					<Form className="d-flex gap-3 align-items-center">
						<Form.Text>Quantity:</Form.Text>
						<Form.Control onChange={handleChangeQuantity} type={"number"} value={quantity}/>
						<Button onClick={handleUpdateItemQuantity} variant={"outline-success"} disabled={loading}>
							{loading ? "Loading..." : "Update"}
						</Button>
					</Form>
					<section>
						<Badge className="p-2">{item?.product?.price} EGP</Badge>
					</section>
				</section>
			</Col>
			<DeleteItemFromLoggedUserCartModel show={show} handleClose={handleClose} item={item}/>
		</Row>
	)
}
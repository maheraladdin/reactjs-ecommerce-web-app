import {Badge, Col, Row} from "react-bootstrap";
import Logo from "../../assets/images/logo.png"
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

export default function CartItem() {
	return (
		<Row className="bg-light p-3 rounded-3 gap-3 gap-md-0">
			<Col
				xs={12}
				md={3}
			>
				<img
					src={Logo}
					alt="logo"
					className="bg-white p-3 rounded-3 w-100"
				/>
			</Col>
			<Col
				xs={12}
				md={9}
				className="d-flex flex-column gap-2"
			>
				<section className="d-flex justify-content-between align-items-center">
					<section>Category name</section>
					<Button variant="outline-danger">Delete</Button>
				</section>
				<section>Product Title</section>
				<section>Brand: Apple</section>
				<section className="d-flex align-items-center gap-3">
					<section>Color:</section>
					<section className="bg-danger rounded-circle" style={{
					width: "30px",
					height: "30px"
				}}></section>
				</section>
				<section className="d-flex justify-content-between align-items-center flex-wrap gap-2">
					<Form className="d-flex gap-3 align-items-center">
						<Form.Text>Quantity:</Form.Text>
						<Form.Control type={"number"} />
					</Form>
					<section>
						<Badge className="p-2">1000 EGP</Badge>
					</section>
				</section>
			</Col>
		</Row>
	)
}
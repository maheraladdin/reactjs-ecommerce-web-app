import {Col, Row} from "react-bootstrap";
import Form from "react-bootstrap/Form";

export default function UserOrderCardProduct({item}) {
	return (
		<Row className="py-3 bg-white rounded-3 flex-column flex-sm-row align-items-center text-center text-sm-start gap-3 gap-sm-0">
			<Col xs={3}>
				<img
					src={item?.product?.imageCover}
					alt="placeholder"
					className="img-fluid"
				/>
			</Col>
			<Col xs={9} className="d-flex flex-column gap-2">
				<h5>{item?.product?.title}</h5>
				<section className="d-flex align-items-center gap-2">
					<section className="h5 m-0">
						Color:
					</section>
					<section className="d-inline-block rounded-circle" style={{
						width: "20px",
						height: "20px",
						backgroundColor: item?.color,
					}}></section>
				</section>
				<Form className="d-flex flex-column gap-2">
					<Form.Group className="d-flex align-items-center gap-3" controlId="quantity">
						<Form.Label className="h5 m-0">Quantity:</Form.Label>
						<Form.Control style={{
							maxWidth: "100px"
						}} type="number" value={item?.quantity} disabled />
					</Form.Group>
				</Form>
			</Col>
		</Row>
	)
}
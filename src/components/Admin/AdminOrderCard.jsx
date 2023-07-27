import {Badge, Col, Row} from "react-bootstrap";
import Logo from "../../assets/images/logo.png"
import Button from "react-bootstrap/Button";
import {Link} from "react-router-dom";
import {adminOrderDetailsRoute} from "../../constants/routes";

export default function AdminOrderCard() {
	return (
		<Row className="bg-light p-3 rounded-3 gap-3 gap-md-0">
			<Col
				xs={12}
				md={3}
			>
				<Link to={adminOrderDetailsRoute}>
					<img
						src={Logo}
						alt="logo"
						className="bg-white p-3 rounded-3 w-100"
					/>
				</Link>
			</Col>
			<Col
				xs={12}
				md={9}
				className="d-flex flex-column gap-1"
			>
				<section className="d-flex justify-content-between align-items-center">
					<h3><Badge>Order id: 123</Badge></h3>
					<Button variant="outline-danger">Delete</Button>
				</section>
				<section className="d-flex align-items-center gap-3">
				</section>
				<section className="d-flex justify-content-between align-items-center flex-wrap gap-2">
					<h4>
						<Badge className="p-2">1000 EGP</Badge>
					</h4>
				</section>
			</Col>
		</Row>
	)
}
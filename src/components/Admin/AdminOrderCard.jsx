import {Badge, Col, Row} from "react-bootstrap";
import Logo from "../../assets/images/logo.png"
import {Link} from "react-router-dom";
import {adminOrderDetailsRoute} from "../../constants/routes";
import AdminOrderStatusForm from "./AdminOrderStatusForm";

export default function AdminOrderCard({order}) {
	return (
		<Row className="bg-light p-3 rounded-3 gap-3 gap-md-0">
			<Col
				xs={12}
				md={3}
			>
				<Link to={adminOrderDetailsRoute.replace(":id",order?._id)}>
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
				<h5><Badge className="p-2">Order id: {order?._id}</Badge></h5>
				<h5><Badge className="p-2">{order?.total} EGP</Badge></h5>
				<AdminOrderStatusForm order={order} />
			</Col>
		</Row>
	)
}
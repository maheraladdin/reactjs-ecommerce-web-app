import {Badge, Col, Row} from "react-bootstrap";
import Logo from "../../assets/images/logo.png"
import {Link} from "react-router-dom";
import {adminOrderDetailsRoute} from "../../constants/routes";
import Switch from "react-switch";
import Form from "react-bootstrap/Form";
import useUpdateOrderIsPaidStatus from "../../Hooks/orders/useUpdateOrderIsPaidStatus";
import useUpdateOrderIsDeliveredStatus from "../../Hooks/orders/useUpdateOrderIsDeliveredStatus";
import useUpdateOrderIsCancelledStatus from "../../Hooks/orders/useUpdateOrderIsCanceledStatus";

export default function AdminOrderCard({order}) {
	const {isPaid, handleIsPaidChange} = useUpdateOrderIsPaidStatus(order)
	const {isDelivered, handleIsDeliveredChange} = useUpdateOrderIsDeliveredStatus(order);
	const {isCancelled, handleIsCancelledChange} = useUpdateOrderIsCancelledStatus(order);
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
				<Form className="d-flex flex-column gap-3 justify-content-center">
					<Form.Group className="d-flex align-items-center gap-3 justify-content-between">
						<Form.Label className={"h4 m-0"} >isPaid</Form.Label>
						<Switch
							checked={isPaid}
							onChange={handleIsPaidChange}
							onColor="#86d3ff"
							onHandleColor="#2693e6"
							handleDiameter={30}
							uncheckedIcon={false}
							checkedIcon={false}
							boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
							activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
							height={30}
						/>
					</Form.Group>
					<Form.Group className="d-flex align-items-center gap-3 justify-content-between">
						<Form.Label className={"h4 m-0"} >isDelivered</Form.Label>
						<Switch
							checked={isDelivered}
							onChange={handleIsDeliveredChange}
							onColor="#86d3ff"
							onHandleColor="#2693e6"
							handleDiameter={30}
							uncheckedIcon={false}
							checkedIcon={false}
							boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
							activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
							height={30}
						/>
					</Form.Group>
					<Form.Group className="d-flex align-items-center gap-3 justify-content-between">
						<Form.Label className={"h4 m-0"} >isCancelled</Form.Label>
						<Switch
							checked={isCancelled}
							onChange={handleIsCancelledChange}
							onColor="#86d3ff"
							onHandleColor="#2693e6"
							handleDiameter={30}
							uncheckedIcon={false}
							checkedIcon={false}
							boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
							activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
							height={30}
						/>
					</Form.Group>
				</Form>
			</Col>
		</Row>
	)
}
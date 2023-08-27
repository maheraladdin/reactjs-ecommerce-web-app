import CartItem from "../Cart/CartItem";
import Form from "react-bootstrap/Form";
import Switch from "react-switch";
import useUpdateOrderIsPaidStatus from "../../Hooks/orders/useUpdateOrderIsPaidStatus";
import useUpdateOrderIsDeliveredStatus from "../../Hooks/orders/useUpdateOrderIsDeliveredStatus";
import useUpdateOrderIsCancelledStatus from "../../Hooks/orders/useUpdateOrderIsCanceledStatus";

export default function AdminOrderDetails({order}) {
	const {isPaid, handleIsPaidChange} = useUpdateOrderIsPaidStatus(order)
	const {isDelivered, handleIsDeliveredChange} = useUpdateOrderIsDeliveredStatus(order);
	const {isCancelled, handleIsCancelledChange} = useUpdateOrderIsCancelledStatus(order);
	return (
		<section className="d-flex flex-column gap-3">
			{
				order?.items?.map((item, i) => {
					return (
						<CartItem key={i} item={item} />
					)
				})
			}
			<section className="d-flex flex-column gap-2 bg-light p-3 rounded-3">
				<h3>Clint Details</h3>
				<section>Username: <span className="text-black-50">{order?.user?.name}</span></section>
				<section>phone number: <span className="text-black-50">{order?.shippingAddress?.phone}</span></section>
				<section>Email: <span className="text-black-50">{order?.user?.email}</span></section>
				<section>total: <span className="text-black-50">{order?.total} EGP</span></section>
				<section>payment method: <span className="text-black-50">{order?.paymentMethod}</span></section>
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
							disabled={isPaid}
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
							disabled={isDelivered}
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
							disabled={isCancelled}
						/>
					</Form.Group>
				</Form>
			</section>
		</section>
	)
}
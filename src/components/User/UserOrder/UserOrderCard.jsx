import {Badge} from "react-bootstrap";
import UserOrderCardProduct from "./UserOrderCardProduct";

export default function UserOrderCard({order}) {
	return (
		<section className="bg-light p-3 rounded-3 d-flex flex-column gap-3">
			<section className="h4 m-0">
				Order ID: {order?._id}
			</section>
			<section className="d-flex flex-column gap-3 px-3">
				{order?.items?.map((item, index) => <UserOrderCardProduct key={`item-${index + 1}`} item={item} />)}
			</section>
			<section className="d-flex flex-column gap-3 justify-content-between h4 m-0">
				<section>Delivery Status: <span className={order?.isDelivered ? "text-success" : "text-primary"}>{order?.isDelivered ? "Done" : "In Progress"}</span></section>
				<section>Paid Status: <span className={order?.isPaid ? "text-success" : "text-primary"}>{order?.isPaid ? "Done" : "In Progress"}</span></section>
				<section className="align-self-end">
					<Badge>{order?.total} EGP</Badge>
				</section>
			</section>
		</section>
	)
}
import CartItem from "../Cart/CartItem";
import AdminOrderStatusForm from "./AdminOrderStatusForm";

export default function AdminOrderDetails({order}) {

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
				<AdminOrderStatusForm order={order} />
			</section>
		</section>
	)
}
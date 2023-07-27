import AdminOrderCard from "./AdminOrderCard";

export default function AdminOrders() {
	return (
		<section className="d-flex flex-column gap-4">
			{
				Array(6).fill().map((item, i) => {
					return (
						<AdminOrderCard key={i} />
					)
				})
			}
		</section>
	)
}
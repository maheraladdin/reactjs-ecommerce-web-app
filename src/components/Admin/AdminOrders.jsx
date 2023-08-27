import AdminOrderCard from "./AdminOrderCard";
import useGetAllOrders from "../../Hooks/orders/useGetAllOrders";
import Pagination from "../utility/Pagination";

export default function AdminOrders() {
	const {orders, numberOfPages, handlePageChange} = useGetAllOrders();
	return (
		<section className="d-flex flex-column gap-4">
			{
				orders.map((order, index) => {
					return (
						<AdminOrderCard key={`order-${index + 1}`} order={order} />
					)
				})
			}
			{numberOfPages > 1 && <Pagination pageCount={numberOfPages} handlePageChange={handlePageChange} />}
		</section>
	)
}
import UserOrderCard from "./UserOrderCard";
import useGetAllOrders from "../../Hooks/orders/useGetAllOrders";
import Pagination from "../utility/Pagination";

export default function UserOrdersBrowser() {
	const {orders, numberOfPages, handlePageChange} = useGetAllOrders();
	return (
		<section className="d-flex flex-column gap-3">
			{
				orders.map((order, index) => {
					return (
						<UserOrderCard key={`order-${index + 1}`} order={order}/>
					)
				})
			}
			{numberOfPages > 1 && <Pagination numberOfPages={numberOfPages} handlePageChange={handlePageChange} />}
		</section>
	)
}
import AdminTemplate from "../../components/Admin/AdminTemplate";
import AdminOrderDetails from "../../components/Admin/AdminOrderDetails";
import useGetOrderById from "../../Hooks/orders/useGetOrderById";

export default function AdminOrderDetailsPage() {
	const {order} = useGetOrderById();
	return (
		<AdminTemplate title={`order id: ${order._id}`} >
			<AdminOrderDetails order={order}/>
		</AdminTemplate>
	)
}
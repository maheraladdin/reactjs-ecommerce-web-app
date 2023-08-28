import AdminTemplate from "../../components/Admin/AdminTemplate";
import AdminOrders from "../../components/Admin/AdminOrder/AdminOrders";

export default function  AdminOrdersManagementPage() {
	return (
	<AdminTemplate title={"Orders Management"} >
		<AdminOrders />
	</AdminTemplate>
	)
}
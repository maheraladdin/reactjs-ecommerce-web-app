import AdminTemplate from "../../components/Admin/AdminTemplate";
import AdminOrders from "../../components/Admin/AdminOrders";

export default function  AdminOrdersManagementPage() {
	return (
	<AdminTemplate title={"Orders Management"} pagination={true}>
		<AdminOrders />
	</AdminTemplate>
	)
}
import AdminTemplate from "../../components/Admin/AdminTemplate";
import AdminOrderDetails from "../../components/Admin/AdminOrderDetails";

export default function AdminOrderDetailsPage() {
	return (
		<AdminTemplate title={"order #123"} pagination={false}>
			<AdminOrderDetails />
		</AdminTemplate>
	)
}
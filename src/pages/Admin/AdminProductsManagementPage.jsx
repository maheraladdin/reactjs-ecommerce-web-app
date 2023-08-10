import AdminProducts from "../../components/Admin/AdminProducts";
import AdminTemplate from "../../components/Admin/AdminTemplate";

export function AdminProductsManagementPage() {
	return (
		<AdminTemplate title={"Products Management"}>
			<AdminProducts />
		</AdminTemplate>
	)
}
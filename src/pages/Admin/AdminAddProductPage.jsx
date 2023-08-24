import AdminTemplate from "../../components/Admin/AdminTemplate";
import AdminAddProduct from "../../components/Admin/AdminAddProduct";

export default function AdminAddProductPage() {
	return (
		<AdminTemplate title={"add new Product"}>
			<AdminAddProduct />
		</AdminTemplate>
	)
}
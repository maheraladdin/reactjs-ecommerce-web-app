import AdminTemplate from "../../components/Admin/AdminTemplate";
import {AdminEditProduct} from "../../components/Admin/AdminProduct/AdminEditProduct";

export function AdminEditProductPage() {
	return (
		<AdminTemplate title={"Update Product"}>
			<AdminEditProduct />
		</AdminTemplate>
	)
}
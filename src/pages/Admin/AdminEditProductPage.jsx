import AdminTemplate from "../../components/Admin/AdminTemplate";
import {AdminEditProduct} from "../../components/Admin/AdminEditProduct";

export function AdminEditProductPage() {
	return (
		<AdminTemplate title={"Update Product"}>
			<AdminEditProduct />
		</AdminTemplate>
	)
}
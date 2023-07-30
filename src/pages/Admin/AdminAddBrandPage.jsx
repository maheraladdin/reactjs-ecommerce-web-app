import AdminTemplate from "../../components/Admin/AdminTemplate";
import AdminAddBrand from "../../components/Admin/AdminAddBrand";

export default function AdminAddBrandPage() {
	return (
		<AdminTemplate pagination={false} title={"add new Brands"}>
			<AdminAddBrand />
		</AdminTemplate>
	)
}
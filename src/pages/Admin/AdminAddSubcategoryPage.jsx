import AdminTemplate from "../../components/Admin/AdminTemplate";
import AdminAddSubcategory from "../../components/Admin/AdminAddSubcategory";

export default function AdminAddSubcategoryPage() {
	return (
		<AdminTemplate pagination={false} title={"add new Subcategory"}>
			<AdminAddSubcategory />
		</AdminTemplate>
	)
}
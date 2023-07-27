import AdminTemplate from "../../components/Admin/AdminTemplate";
import AdminAddCategory from "../../components/Admin/AdminAddCategory";

export default function AdminAddCategoryPage() {
	return (
		<AdminTemplate pagination={false} title={"add new Category"}>
			<AdminAddCategory />
		</AdminTemplate>
	)
}
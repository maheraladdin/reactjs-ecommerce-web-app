import AdminTemplate from "../../components/Admin/AdminTemplate";
import AdminCouponManagement from "../../components/Admin/AdminCouponManagement";

export default function AdminCouponManagementPage() {
    return (
        <AdminTemplate title={"Coupons Management"}>
            <AdminCouponManagement />
        </AdminTemplate>
    )
}
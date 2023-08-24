import Button from "react-bootstrap/Button";
import {Table} from "react-bootstrap";
import useGetCoupons from "../../Hooks/coupons/useGetCoupons";
import Pagination from "../utility/Pagination";
import CreateCouponModel from "../coupons/createCouponModel";
import useCreateCoupon from "../../Hooks/coupons/useCreateCoupon";
import UpdateCouponModel from "../coupons/updateCouponModel";
import useUpdateCoupon from "../../Hooks/coupons/useUpdateCoupon";
import DeleteCouponModel from "../coupons/DeleteCouponModel";
import useDeleteCoupon from "../../Hooks/coupons/useDeleteCoupon";

export default function AdminCouponManagement() {
    const {coupons, numberOfPages, handlePageChange} = useGetCoupons();
    const {handleClose: handleCloseCreateModel, show: showCreateModel} = useCreateCoupon();
    const {handleClose: handleCloseUpdateModel, show: showUpdateModel, setDefault: setDefaultUpdate} = useUpdateCoupon();
    const {handleClose: handleCloseDeleteModel, show: showDeleteModel, setDefault: setDefaultDelete} = useDeleteCoupon();
    return (
        <section className="d-flex flex-column gap-2">
            <Button onClick={handleCloseCreateModel} className="w-fit-content">
                <i className="fas fa-plus me-2"></i>
                Create Coupon
            </Button>
            <Table className="text-nowrap" Times striped hover responsive>
                <thead>
                    <tr>
                        <th scope="col">Coupon Code</th>
                        <th scope="col">Discount</th>
                        <th scope="col">Max Discount</th>
                        <th scope="col">Expires At</th>
                        <th scope="col">Usage</th>
                        <th scope="col">Max Usage</th>
                        <th scope="col">Status</th>
                        <th scope="col">Actions</th>
                    </tr>
                </thead>
                <tbody>
                {
                    coupons.map((coupon, index) => {
                        return (
                            <tr key={`table-row-${index + 1}`}>
                                <td>{coupon.name}</td>
                                <td>{coupon.discount}%</td>
                                <td>{coupon.maxDiscount || "-"}</td>
                                <td>{(() => {
                                    let expireDate = new Date(coupon.expireAt)
                                    return `${expireDate.getDate()}/${expireDate.getMonth() + 1}/${expireDate.getFullYear()}`
                                })()}</td>
                                <td>{coupon.numberOfUsage} Times</td>
                                <td>{coupon.maxNumberOfUsage} Times</td>
                                <td>{
                                    (() => {
                                        const now = new Date();
                                        const expireAt = new Date(coupon.expireAt);
                                        if (now.getTime() > expireAt.getTime() || coupon.maxNumberOfUsage === coupon.numberOfUsage) {
                                            return <span className="text-danger">Expired</span>
                                        }
                                        else {
                                            return <span className="text-success">Active</span>
                                        }
                                    })()
                                }</td>
                                <td className="d-flex gap-3">
                                    <Button
                                        onClick={async () => {
                                            console.log(coupon._id);
                                            await setDefaultUpdate(coupon._id);
                                            handleCloseUpdateModel();
                                        }}
                                        size={"sm"}
                                    >
                                        <i className="fas fa-edit"></i>
                                    </Button>
                                    <Button
                                        onClick={async () => {
                                            await setDefaultDelete(coupon._id);
                                            handleCloseDeleteModel();
                                        }}
                                        size={"sm"} variant="danger">
                                        <i className="fas fa-trash"></i>
                                    </Button>
                                </td>
                            </tr>
                        );
                    })
                }
                </tbody>
            </Table>
            {coupons.length > 12 && <Pagination numberOfPages={numberOfPages} handlePageChange={handlePageChange}/>}
            <CreateCouponModel handleClose={handleCloseCreateModel} show={showCreateModel} />
            <UpdateCouponModel handleClose={handleCloseUpdateModel} show={showUpdateModel} />
            <DeleteCouponModel handleClose={handleCloseDeleteModel} show={showDeleteModel} />
        </section>
    )
}
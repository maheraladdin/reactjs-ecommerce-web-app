import Button from "react-bootstrap/Button";
import {Table} from "react-bootstrap";

export default function AdminCouponManagement() {
    return (
        <section className="d-flex flex-column gap-2">
            <Button className="w-fit-content">
                <i className="fas fa-plus me-2"></i>
                Create Coupon
            </Button>
            <Table striped hover>
                <thead>
                    <tr>
                        <th scope="col">Coupon Code</th>
                        <th scope="col">Discount</th>
                        <th scope="col">Max Discount</th>
                        <th scope="col">Expires At</th>
                        <th scope="col">Usage</th>
                        <th scope="col">Max Usage</th>
                        <th scope="col">Status</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                {
                    Array(10).fill(0).map((item, index) => {
                        return (
                            <tr key={`table-row-${index + 1}`}>
                                <td>COUPONCODE</td>
                                <td>10%</td>
                                <td>10000</td>
                                <td>2021-12-31</td>
                                <td>1 Times</td>
                                <td>3 Times</td>
                                <td>Active</td>
                                <td className="d-flex gap-3">
                                    <Button size={"sm"}>
                                        <i className="fas fa-edit"></i>
                                    </Button>
                                    <Button size={"sm"} variant="danger">
                                        <i className="fas fa-trash"></i>
                                    </Button>
                                </td>
                            </tr>
                        );
                    })
                }
                </tbody>
            </Table>

        </section>
    )
}
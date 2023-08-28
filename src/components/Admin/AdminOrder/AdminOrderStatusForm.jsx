import Form from "react-bootstrap/Form";
import Switch from "react-switch";
import useUpdateOrderIsPaidStatus from "../../../Hooks/orders/useUpdateOrderIsPaidStatus";
import useUpdateOrderIsDeliveredStatus from "../../../Hooks/orders/useUpdateOrderIsDeliveredStatus";
import useUpdateOrderIsCancelledStatus from "../../../Hooks/orders/useUpdateOrderIsCanceledStatus";

export default function AdminOrderStatusForm({order}) {
    const {handleIsPaidChange} = useUpdateOrderIsPaidStatus(order)
    const {handleIsDeliveredChange} = useUpdateOrderIsDeliveredStatus(order);
    const {handleIsCancelledChange} = useUpdateOrderIsCancelledStatus(order);
    return (
        <Form className="d-flex flex-column gap-3 justify-content-center">
            <Form.Group className="d-flex align-items-center gap-3 justify-content-between">
                <Form.Label className={"h4 m-0"} >isPaid</Form.Label>
                <section className="d-flex align-items-center gap-3">
                    <section>
                        {order?.paidAt && order?.isPaid && <span className="text-black-50">{order?.paidAt}</span>}
                    </section>
                    <Switch
                        checked={order?.isPaid}
                        onChange={handleIsPaidChange}
                        onColor="#86d3ff"
                        onHandleColor="#2693e6"
                        handleDiameter={30}
                        uncheckedIcon={false}
                        checkedIcon={false}
                        boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
                        activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
                        height={30}
                    />
                </section>
            </Form.Group>
            <Form.Group className="d-flex align-items-center gap-3 justify-content-between">
                <Form.Label className={"h4 m-0"} >isDelivered</Form.Label>
                <section className="d-flex align-items-center gap-3">
                    <section>
                        {order?.deliveredAt && order?.isDelivered && <span className="text-black-50">{order?.deliveredAt}</span>}
                    </section>
                    <Switch
                        checked={order?.isDelivered}
                        onChange={handleIsDeliveredChange}
                        onColor="#86d3ff"
                        onHandleColor="#2693e6"
                        handleDiameter={30}
                        uncheckedIcon={false}
                        checkedIcon={false}
                        boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
                        activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
                        height={30}
                    />
                </section>
            </Form.Group>
            <Form.Group className="d-flex align-items-center gap-3 justify-content-between">
                <Form.Label className={"h4 m-0"} >isCancelled</Form.Label>
                <section className="d-flex align-items-center gap-3">
                    <section>
                        {order?.cancelledAt && order?.isCancelled && <span className="text-black-50">{order?.cancelledAt}</span>}
                    </section>
                    <Switch
                        checked={order?.isCancelled}
                        onChange={handleIsCancelledChange}
                        onColor="#86d3ff"
                        onHandleColor="#2693e6"
                        handleDiameter={30}
                        uncheckedIcon={false}
                        checkedIcon={false}
                        boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
                        activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
                        height={30}
                    />
                </section>
            </Form.Group>
        </Form>
    )
}
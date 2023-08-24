import {Modal, Button, Form} from "react-bootstrap";
import useUpdateCoupon from "../../Hooks/coupons/useUpdateCoupon";

export default function UpdateCouponModel({show, handleClose}) {
    const {
        handleUpdateCoupon,
        handleSetName,
        name,
        handleSetExpireAt,
        expireAt,
        handleSetDiscount,
        discount,
        handleSetMaxNumberOfUsage,
        maxNumberOfUsage,
        handleSetMaxDiscount,
        maxDiscount,
        loading,
        validated,
    } = useUpdateCoupon();
    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Create Coupon</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form validated={validated} className="d-flex flex-column gap-3">
                    <Form.Group controlId="couponName">
                        <Form.Label>Coupon Name</Form.Label>
                        <Form.Control value={name} required onChange={handleSetName} type="text" placeholder="Enter coupon name" />
                    </Form.Group>
                    <Form.Group controlId="couponDiscount">
                        <Form.Label>Discount Percentage</Form.Label>
                        <Form.Control value={discount} required min={0} max={100} onChange={handleSetDiscount} type="number" placeholder="Enter discount" />
                    </Form.Group>
                    <Form.Group controlId="couponMaxDiscount">
                        <Form.Label>Max Discount</Form.Label>
                        <Form.Control value={maxDiscount} min={0} onChange={handleSetMaxDiscount} type="number" placeholder="Enter max discount" />
                    </Form.Group>
                    <Form.Group controlId="couponExpireAt">
                        <Form.Label>Expire At</Form.Label>
                        <Form.Control
                            value={expireAt}
                            min={new Date().toISOString().split("T")[0]}
                            required
                            onChange={handleSetExpireAt}
                            type="date"
                            placeholder="Enter expire date"
                        />
                    </Form.Group>
                    <Form.Group controlId="couponMaxNumberOfUsage">
                        <Form.Label>Max Number Of Usage</Form.Label>
                        <Form.Control value={maxNumberOfUsage} onChange={handleSetMaxNumberOfUsage} type="number" placeholder="Enter max number of usage" />
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                <Button variant="primary" onClick={async () => {
                    await handleUpdateCoupon();
                    handleClose();
                }} disabled={loading}>
                    {loading ? "Loading..." : "Update"}
                </Button>
            </Modal.Footer>
        </Modal>
    )
}
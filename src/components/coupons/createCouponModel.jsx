import {Modal, Button, Form} from "react-bootstrap";
import useCreateCoupon from "../../Hooks/coupons/useCreateCoupon";

export default function CreateCouponModel({show, handleClose}) {
    const {
        handleCreateCoupon,
        handleSetName,
        handleSetExpireAt,
        handleSetDiscount,
        handleSetMaxNumberOfUsage,
        handleSetMaxDiscount,
        loading,
        validated,
    } = useCreateCoupon();
    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Create Coupon</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form validated={validated} className="d-flex flex-column gap-3">
                    <Form.Group controlId="couponName">
                        <Form.Label>Coupon Name</Form.Label>
                        <Form.Control required onChange={handleSetName} type="text" placeholder="Enter coupon name" />
                    </Form.Group>
                    <Form.Group controlId="couponDiscount">
                        <Form.Label>Discount Percentage</Form.Label>
                        <Form.Control required min={0} max={100} onChange={handleSetDiscount} type="number" placeholder="Enter discount" />
                    </Form.Group>
                    <Form.Group controlId="couponMaxDiscount">
                        <Form.Label>Max Discount</Form.Label>
                        <Form.Control min={0} onChange={handleSetMaxDiscount} type="number" placeholder="Enter max discount" />
                    </Form.Group>
                    <Form.Group controlId="couponExpireAt">
                        <Form.Label>Expire At</Form.Label>
                        <Form.Control
                            min={new Date().toISOString().split("T")[0]}
                            required
                            onChange={handleSetExpireAt}
                            type="date"
                            placeholder="Enter expire date"
                        />
                    </Form.Group>
                    <Form.Group controlId="couponMaxNumberOfUsage">
                        <Form.Label>Max Number Of Usage</Form.Label>
                        <Form.Control onChange={handleSetMaxNumberOfUsage} type="number" placeholder="Enter max number of usage" />
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                <Button variant="primary" onClick={async () => {
                    await handleCreateCoupon();
                    handleClose();
                }} disabled={loading}>
                    {loading ? "Loading..." : "Create"}
                </Button>
            </Modal.Footer>
        </Modal>
    )
}
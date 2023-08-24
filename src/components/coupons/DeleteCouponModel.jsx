import {Modal, Button} from "react-bootstrap";
import useDeleteCoupon from "../../Hooks/coupons/useDeleteCoupon";

export default function DeleteCouponModel({show, handleClose}) {
    const {handleDeleteCoupon, loading} = useDeleteCoupon();
    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Delete Coupon</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <p>Are you sure you want to delete this coupon?</p>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                <Button variant="danger" onClick={async () => {
                    await handleDeleteCoupon();
                    handleClose();
                }} disabled={loading}>
                    {loading ? "Loading..." : "Delete"}
                </Button>
            </Modal.Footer>
        </Modal>
    )
}
import {Modal, Button} from "react-bootstrap";
import useClearCart from "../../Hooks/cart/useClearCart";

export default function DeleteItemFromLoggedUserCartModel({show, handleClose}) {
    const {loading, handleClearCart} = useClearCart();
    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Clear Cart</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <p>Are you sure you want to Clear Cart?</p>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                <Button variant="danger" onClick={async () => {
                    await handleClearCart();
                    handleClose();
                }} disabled={loading}>
                    {loading ? "Loading..." : "Delete"}
                </Button>
            </Modal.Footer>
        </Modal>
    )
}
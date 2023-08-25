import {Modal, Button} from "react-bootstrap";
import useDeleteItemFromLoggedUserCart from "../../Hooks/cart/useDeleteItemFromLoggedUserCart";

export default function DeleteItemFromLoggedUserCartModel({show, handleClose, item}) {
    const {loading, handleDeleteItemFromLoggedUserCart} = useDeleteItemFromLoggedUserCart(item);
    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Delete Item</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <p>Are you sure you want to delete this item?</p>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                <Button variant="danger" onClick={async () => {
                    await handleDeleteItemFromLoggedUserCart();
                    handleClose();
                }} disabled={loading}>
                    {loading ? "Loading..." : "Delete"}
                </Button>
            </Modal.Footer>
        </Modal>
    )
}
import Button from "react-bootstrap/Button";
import {Link} from "react-router-dom";
import {userAddressUpdateRoute} from "../../constants/routes";
import {Modal} from "react-bootstrap";
import {useState} from "react";

export default function UserAddressCard() {

	const [show, setShow] = useState(false);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	return (
		<section className="d-flex flex-column gap-2 bg-white p-3 rounded-3">
			<section className="d-flex justify-content-between align-items-center">
				<section className="h4">Home</section>
				<section className="d-flex gap-3">
					<Link to={userAddressUpdateRoute}>
						<Button variant={"secondary"}>
							<i className="fa-solid fa-edit"></i>
						</Button>
					</Link>

					<Button variant={"danger"} onClick={handleShow}>
						<i className="fa-solid fa-trash"></i>
					</Button>
				</section>
			</section>
			<section>Address Description</section>
			<section>phone number: 0000000000000</section>
			<Modal show={show} onHide={handleClose}>
				<Modal.Header closeButton>
					<Modal.Title>Delete Address</Modal.Title>
				</Modal.Header>
				<Modal.Body>Are you sure you want to delete this address ?</Modal.Body>
				<Modal.Footer>
					<Button variant="secondary" onClick={handleClose}>
						No
					</Button>
					<Button variant="danger" onClick={handleClose}>
						Yes
					</Button>
				</Modal.Footer>
			</Modal>
		</section>
	)
}
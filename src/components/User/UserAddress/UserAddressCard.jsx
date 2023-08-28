import Button from "react-bootstrap/Button";
import {Link} from "react-router-dom";
import {userAddressUpdateRoute} from "../../../constants/routes";
import {Modal} from "react-bootstrap";
import useDeleteAddress from "../../../Hooks/addresses/useDeleteAddress";

export default function UserAddressCard({address}) {
	const {
		show,
		handleClose,
		handleDeleteAddress,
		loading
	} = useDeleteAddress(address._id);
	return (
		<section className="d-flex flex-column gap-2 bg-white p-3 rounded-3">
			<section className="d-flex justify-content-between align-items-center">
				<section className="h4">{address.alias}</section>
				<section className="d-flex gap-3">
					<Link to={userAddressUpdateRoute.replace(":id",address._id)}>
						<Button variant={"secondary"}>
							<i className="fa-solid fa-edit"></i>
						</Button>
					</Link>

					<Button variant={"danger"} onClick={handleClose}>
						<i className="fa-solid fa-trash"></i>
					</Button>
				</section>
			</section>
			<section>City: {address.city}</section>
			<section>Description: {address.details}</section>
			<section>Postal code: {address.postalCode}</section>
			<section>Phone number: {address.phone}</section>
			<Modal show={show} onHide={handleClose}>
				<Modal.Header closeButton>
					<Modal.Title>Delete Address</Modal.Title>
				</Modal.Header>
				<Modal.Body>Are you sure you want to delete this address ?</Modal.Body>
				<Modal.Footer>
					<Button variant="secondary" onClick={handleClose}>
						Cancel
					</Button>
					<Button variant="danger" onClick={handleDeleteAddress} disabled={loading}>
						{loading ? "Loading..." : "Delete"}
					</Button>
				</Modal.Footer>
			</Modal>
		</section>
	)
}
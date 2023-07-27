import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export default function UserAddressUpdate() {
	return (
		<Form className="d-flex flex-column gap-3">
			<Form.Group controlId={"AddressTitle"}>
				<Form.Label>Address Title</Form.Label>
				<Form.Control type={"text"} placeholder={"Address Title"} />
			</Form.Group>
			<Form.Group controlId={"AddressDescription"}>
				<Form.Label>Address Description</Form.Label>
				<Form.Control className="resize-none" as={"textarea"} rows={3} placeholder={"Address Description"} />
			</Form.Group>
			<Form.Group controlId={"PhoneNumber"}>
				<Form.Label>Phone Number</Form.Label>
				<Form.Control type={"text"} placeholder={"Phone Number"} />
			</Form.Group>
			<Button className="align-self-end" variant={"primary"}>
				Update Address
			</Button>
		</Form>
	)
}
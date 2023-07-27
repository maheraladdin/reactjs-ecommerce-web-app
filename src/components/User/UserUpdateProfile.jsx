import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export default function UserUpdateProfile() {
	return (
		<Form className="d-flex flex-column gap-3">
			<Form.Group controlId={"Username"}>
				<Form.Label>Username</Form.Label>
				<Form.Control type={"text"} placeholder={"Username"} />
			</Form.Group>
			<Form.Group controlId={"phoneNumber"}>
				<Form.Label>Phone Number</Form.Label>
				<Form.Control type={"text"} placeholder={"Phone Number"} />
			</Form.Group>
			<Form.Group controlId={"Email"}>
				<Form.Label>Email</Form.Label>
				<Form.Control type={"email"} placeholder={"Email"} />
			</Form.Group>
			<Button className="align-self-end" variant={"primary"}>
				Update Profile Details
			</Button>
		</Form>
	)
}
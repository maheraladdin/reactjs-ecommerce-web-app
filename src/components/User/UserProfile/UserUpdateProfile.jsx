import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import useUpdateLoggedUser from "../../../Hooks/user/useUpdateLoggedUser";

export default function UserUpdateProfile() {
	const {
		loading,
		name,
		email,
		phone,
		handleName,
		handleEmail,
		handlePhone,
		updateLoggedUser,
	} = useUpdateLoggedUser();

	return (
		<Form className="d-flex flex-column gap-3">
			<Form.Group controlId={"Username"}>
				<Form.Label>Username</Form.Label>
				<Form.Control value={name} onChange={handleName} type={"text"} placeholder={"Username"} />
			</Form.Group>
			<Form.Group controlId={"phoneNumber"}>
				<Form.Label>Phone Number</Form.Label>
				<Form.Control value={phone} onChange={handlePhone} type={"text"} placeholder={"Phone Number"} />
			</Form.Group>
			<Form.Group controlId={"Email"}>
				<Form.Label>Email</Form.Label>
				<Form.Control value={email} onChange={handleEmail} type={"email"} placeholder={"Email"} />
			</Form.Group>
			<Button onClick={updateLoggedUser} className="align-self-end" variant={"primary"} disabled={loading}>
				{loading ? "Loading..." : "Update"}
			</Button>
		</Form>
	)
}
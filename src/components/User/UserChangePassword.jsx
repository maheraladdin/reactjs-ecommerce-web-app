import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import {Badge} from "react-bootstrap";
import useUpdateLoggedUserPassword from "../../Hooks/user/useUpdateLoggedUserPassword";

export default function UserChangePassword() {

	const {
		loading,
		validated,
		currentPassword,
		handleCurrentPassword,
		password,
		handlePassword,
		passwordConfirmation,
		handlePasswordConfirmation,
		updateLoggedUserPasswordHandler
	} = useUpdateLoggedUserPassword();

	return (
		<Form validated={validated} className="d-flex flex-column gap-3">
			<h3>
				<Badge bg={"danger"} className="w-fit-content text-capitalize">change your password</Badge>
			</h3>
			<Form.Group controlId={"CurrentPassword"}>
				<Form.Label>Current Password</Form.Label>
				<Form.Control required onChange={handleCurrentPassword} value={currentPassword} type={"password"} placeholder={"Current Password"} />
			</Form.Group>
			<Form.Group controlId={"NewPassword"}>
				<Form.Label>New Password</Form.Label>
				<Form.Control required onChange={handlePassword} value={password} type={"password"} placeholder={"New Password"} />
			</Form.Group>
			<Form.Group controlId={"ConfirmNewPassword"}>
				<Form.Label>New Password Confirmation</Form.Label>
				<Form.Control required onChange={handlePasswordConfirmation} value={passwordConfirmation} type={"password"} placeholder={"New Password Confirmation"} />
			</Form.Group>
			<Button onClick={updateLoggedUserPasswordHandler} className="align-self-end" variant={"primary"} disabled={loading}>
				{loading ? "Loading..." : "Update Password"}
			</Button>
		</Form>
	)
}
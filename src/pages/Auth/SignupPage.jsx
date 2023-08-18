import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from "react-bootstrap/Container";
import {Link} from "react-router-dom";
import {loginRoute} from "../../constants/routes";
import PageTemplate from "../../components/utility/pageTemplate";
import useSignup from "../../Hooks/auth/useSignup";
import {ToastContainer} from "react-toastify";

export default function SignupPage() {

	const {
		username,
		handleUsernameChange,
		email,
		handleEmailChange,
		phoneNumber,
		handlePhoneNumberChange,
		password,
		handlePasswordChange,
		passwordConfirmation,
		handlePasswordConfirmationChange,
		rememberMe,
		handleRememberMeChange,
		validated,
		handleSubmit,
	} = useSignup();

	return (
		<PageTemplate>
			<Container
				className="d-flex align-items-center justify-content-center flex-column gap-4"
				style={{
					height: "calc(100vh - 70px)",
					width: "300px"
				}}
			>
				<section className="text-center d-flex flex-column gap-3">
					<h2>Sign up</h2>
				</section>
				<Form
					validated={validated}
					style={{width: "300px"}}
					className={"d-flex flex-column gap-3"}
				>
					<Form.Group>
						<Form.Label htmlFor={"username"}>Username</Form.Label>
						<Form.Control
							required
							type="text"
							placeholder="Enter username"
							value={username}
							onChange={handleUsernameChange}
							id={"username"}
						/>
					</Form.Group>
					<Form.Group>
						<Form.Label htmlFor={"email"}>Email address</Form.Label>
						<Form.Control
							required
							type="email"
							placeholder="Enter email"
							value={email}
							onChange={handleEmailChange}
							id={"email"}
						/>
					</Form.Group>
					<Form.Group>
						<Form.Label htmlFor={"phone"}>Phone number</Form.Label>
						<Form.Control
							type="phone"
							placeholder="Enter phone number"
							value={phoneNumber}
							onChange={handlePhoneNumberChange}
							id={"phone"}
						/>
					</Form.Group>
					<Form.Group>
						<Form.Label htmlFor={"password"}>Password</Form.Label>
						<Form.Control
							required
							type="password"
							placeholder="Password"
							value={password}
							onChange={handlePasswordChange}
							id={"password"}
						/>
					</Form.Group>
					<Form.Group>
						<Form.Label htmlFor={"passwordConfirmation"}>Password Confirmation</Form.Label>
						<Form.Control
							required
							type="password"
							placeholder="Password Confirmation"
							value={passwordConfirmation}
							onChange={handlePasswordConfirmationChange}
							id={"passwordConfirmation"}
						/>
					</Form.Group>
					<Form.Group controlId="formBasicCheckbox">
						<Form.Check
							type="checkbox"
							label="Remember me"
							checked={rememberMe}
							onChange={handleRememberMeChange}
						/>
					</Form.Group>
					<Button onClick={handleSubmit} className="w-100" variant="primary" type="submit">
						Sign up
					</Button>
					<Form.Group>
						<Form.Text>
							Do have an account? <Link to={loginRoute} className="text-decoration-none text-primary">Login</Link>
						</Form.Text>
					</Form.Group>
				</Form>
				<ToastContainer
					autoClose={5000}
					hideProgressBar={false}
					newestOnTop={false}
					closeOnClick={false}
					rtl={false}
					pauseOnFocusLoss={false}
					draggable={false}
					pauseOnHover={false}
					limit={1}
				/>
			</Container>
		</PageTemplate>
	);
}
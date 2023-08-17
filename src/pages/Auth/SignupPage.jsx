import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from "react-bootstrap/Container";
import {Link} from "react-router-dom";
import {loginRoute} from "../../constants/routes";
import PageTemplate from "../../components/utility/pageTemplate";
import useSignup from "../../Hooks/auth/useSignup";

export default function SignupPage() {

	const {
		username,
		handleUsernameChange,
		email,
		handleEmailChange,
		password,
		handlePasswordChange,
		passwordConfirmation,
		handlePasswordConfirmationChange,
		rememberMe,
		handleRememberMeChange,
		validated
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
				<Form validated={validated} style={{width: "300px"}}>
					<Form.Group className="mb-3" controlId="formBasicEmail">
						<Form.Label>Username</Form.Label>
						<Form.Control
							required
							type="text"
							placeholder="Enter username"
							value={username}
							onChange={handleUsernameChange}
						/>
					</Form.Group>
					<Form.Group className="mb-3" controlId="formBasicEmail">
						<Form.Label>Email address</Form.Label>
						<Form.Control
							required
							type="email"
							placeholder="Enter email"
							value={email}
							onChange={handleEmailChange}
						/>
					</Form.Group>
					<Form.Group className="mb-3" controlId="formBasicPassword">
						<Form.Label>Password</Form.Label>
						<Form.Control
							required
							type="password"
							placeholder="Password"
							value={password}
							onChange={handlePasswordChange}
						/>
					</Form.Group>
					<Form.Group className="mb-3" controlId="formBasicPassword">
						<Form.Label>Password Confirmation</Form.Label>
						<Form.Control
							required
							type="password"
							placeholder="Password Confirmation"
							value={passwordConfirmation}
							onChange={handlePasswordConfirmationChange}
						/>
					</Form.Group>
					<Form.Group className="mb-3" controlId="formBasicCheckbox">
						<Form.Check
							type="checkbox"
							label="Remember me"
							checked={rememberMe}
							onChange={handleRememberMeChange}
						/>
					</Form.Group>
					<Button className="w-100" variant="primary" type="submit">
						Sign up
					</Button>
					<Form.Group className="pt-2">
						<Form.Text>
							Do have an account? <Link to={loginRoute} className="text-decoration-none text-primary">Login</Link>
						</Form.Text>
					</Form.Group>
				</Form>
			</Container>
		</PageTemplate>
	);
}
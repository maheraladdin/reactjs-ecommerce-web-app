import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from "react-bootstrap/Container";
import {resetPasswordRoute, signupRoute} from "../../constants/routes";
import {Link} from "react-router-dom";
import PageTemplate from "../../components/utility/pageTemplate";
import useLogin from "../../Hooks/auth/useLogin";

export default function LoginPage() {
	const {
		email,
		password,
		rememberMe,
		handleEmailChange,
		handlePasswordChange,
		handleRememberMeChange,
		handleSubmit,
		validated
	} = useLogin();
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
					<h2>Login</h2>
				</section>
				<Form className="d-flex flex-column gap-3" validated={validated} style={{width: "300px"}}>
					<Form.Group controlId="formBasicEmail">
						<Form.Label>Email address</Form.Label>
						<Form.Control
							required
							type="email"
							placeholder="Enter email"
							value={email}
							onChange={handleEmailChange}
						/>
					</Form.Group>

					<Form.Group controlId="formBasicPassword">
						<Form.Label>Password</Form.Label>
						<Form.Control
							required
							type="password"
							placeholder="Password"
							value={password}
							onChange={handlePasswordChange}
						/>
					</Form.Group>
					<Form.Group>
						<Form.Text>
							Do you forget your password? <Link to={resetPasswordRoute} className="text-decoration-none text-primary">Yes</Link>
						</Form.Text>
					</Form.Group>
					<Form.Group controlId="formBasicCheckbox">
						<Form.Check
							type="checkbox"
							label="Remember me"
							value={rememberMe}
							onChange={handleRememberMeChange}
						/>
					</Form.Group>
					<Button onClick={handleSubmit} className="w-100" variant="primary" type="submit">
						Login
					</Button>
					<Form.Group>
						<Form.Text>
							Don't have an account? <Link to={signupRoute} className="text-decoration-none text-primary">Sign up</Link>
						</Form.Text>
					</Form.Group>
				</Form>
			</Container>
		</PageTemplate>
	);
}
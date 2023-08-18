import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from "react-bootstrap/Container";
import {adminProductsRoute, signupRoute, userOrdersRoute} from "../../constants/routes";
import {Link} from "react-router-dom";
import PageTemplate from "../../components/utility/pageTemplate";
import useLogin from "../../Hooks/auth/useLogin";
import {ToastContainer} from "react-toastify";

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
				<Form validated={validated} style={{width: "300px"}}>
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
					<Form.Group className="mb-3" controlId="formBasicCheckbox">
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
					<Form.Group className="pt-2">
						<Form.Text>
							Don't have an account? <Link to={signupRoute} className="text-decoration-none text-primary">Sign up</Link>
						</Form.Text>
					</Form.Group>
					<Form.Group className="pt-2">
						<Form.Text>
							<Link to={adminProductsRoute} className="text-decoration-none text-primary"> Sign in as Admin</Link>
						</Form.Text>
					</Form.Group>
					<Form.Group className="pt-2">
						<Form.Text>
							<Link to={userOrdersRoute} className="text-decoration-none text-primary"> Sign in as User</Link>
						</Form.Text>
					</Form.Group>
				</Form>
			</Container>
			<ToastContainer
				autoClose={5000}
				hideProgressBar={false}
				newestOnTop={false}
				closeOnClick={false}
				rtl={false}
				pauseOnFocusLoss={false}
				draggable={false}
				pauseOnHover={false}
			/>
		</PageTemplate>
	);
}
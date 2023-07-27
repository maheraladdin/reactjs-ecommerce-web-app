import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from "react-bootstrap/Container";
import Logo from "../../assets/images/logo.png";
import {adminProductsRoute, signupRoute, userOrdersRoute} from "../../constants/routes";
import {Link} from "react-router-dom";

export default function LoginPage() {
	return (
		<Container
			className="d-flex align-items-center justify-content-center flex-column gap-4"
			style={{
				height: "calc(100vh - 70px)",
				width: "300px"
			}}
		>
			<section className="text-center d-flex flex-column gap-3">
				<section>
					<img width="150px" src={Logo} alt="E-shop logo" className="rounded-circle"/>
				</section>
				<h2>Login</h2>
			</section>
			<Form style={{width: "300px"}}>
				<Form.Group className="mb-3" controlId="formBasicEmail">
					<Form.Label>Email address</Form.Label>
					<Form.Control type="email" placeholder="Enter email" />
				</Form.Group>

				<Form.Group className="mb-3" controlId="formBasicPassword">
					<Form.Label>Password</Form.Label>
					<Form.Control type="password" placeholder="Password" />
				</Form.Group>
				<Form.Group className="mb-3" controlId="formBasicCheckbox">
					<Form.Check type="checkbox" label="Remember me" />
				</Form.Group>
				<Button className="w-100" variant="primary" type="submit">
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
	);
}
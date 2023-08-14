import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from "react-bootstrap/Container";
import Logo from "../../assets/images/logo.png";
import {Link} from "react-router-dom";
import {loginRoute} from "../../constants/routes";
import PageTemplate from "../../components/pageTemplate";

export default function SignupPage() {
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
					<section>
						<img width="150px" src={Logo} alt="E-shop logo" className="rounded-circle"/>
					</section>
					<h2>Sign up</h2>
				</section>
				<Form style={{width: "300px"}}>
					<Form.Group className="mb-3" controlId="formBasicEmail">
						<Form.Label>Username</Form.Label>
						<Form.Control type="text" placeholder="Enter username" />
					</Form.Group>
					<Form.Group className="mb-3" controlId="formBasicEmail">
						<Form.Label>Email address</Form.Label>
						<Form.Control type="email" placeholder="Enter email" />
					</Form.Group>
					<Form.Group className="mb-3" controlId="formBasicPassword">
						<Form.Label>Password</Form.Label>
						<Form.Control type="password" placeholder="Password" />
					</Form.Group>
					<Form.Group className="mb-3" controlId="formBasicPassword">
						<Form.Label>Password Confirmation</Form.Label>
						<Form.Control type="password" placeholder="Password Confirmation" />
					</Form.Group>
					<Form.Group className="mb-3" controlId="formBasicCheckbox">
						<Form.Check type="checkbox" label="Remember me" />
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

import PageTemplate from "../../components/utility/pageTemplate";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import {ToastContainer} from "react-toastify";
import Button from "react-bootstrap/Button";
import useResetForgottenPassword from "../../Hooks/auth/useResetForgottenPassword";

export default function ResetForgottenPasswordPage() {
    const {
        password,
        confirmPassword,
        handlePasswordChange,
        handleConfirmPasswordChange,
        validated,
        handleSubmit
    } = useResetForgottenPassword();
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
                    <h2>Reset Password</h2>
                </section>
                <Form className="d-flex flex-column gap-3" validated={validated} style={{width: "300px"}}>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                            required
                            type="password"
                            placeholder="Enter reset code"
                            value={password}
                            onChange={handlePasswordChange}
                        />
                    </Form.Group>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Password Confirmation</Form.Label>
                        <Form.Control
                            required
                            type="password"
                            placeholder="Enter reset code"
                            value={confirmPassword}
                            onChange={handleConfirmPasswordChange}
                        />
                    </Form.Group>
                    <Button onClick={handleSubmit} className="w-100" variant="primary" type="submit">
                        Reset Password
                    </Button>
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
                />
            </Container>
        </PageTemplate>
    );
}
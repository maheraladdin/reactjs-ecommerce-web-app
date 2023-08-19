import PageTemplate from "../../components/utility/pageTemplate";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import {ToastContainer} from "react-toastify";
import useResetPassword from "../../Hooks/auth/useResetPassword";
import Button from "react-bootstrap/Button";

export default function ResetPasswordPage() {
    const {
        email,
        handleEmailChange,
        validated,
        handleSubmit,
    } = useResetPassword();
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
                        <Form.Label>Email address</Form.Label>
                        <Form.Control
                            required
                            type="email"
                            placeholder="Enter email"
                            value={email}
                            onChange={handleEmailChange}
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
import PageTemplate from "../../components/utility/pageTemplate";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import useVerifyResetCode from "../../Hooks/auth/useVerifyResetCode";

export default function VerifyPasswordResetTokenPage() {
    const {
        resetCode,
        handleResetCodeChange,
        validated,
        handleSubmit
    } = useVerifyResetCode();
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
                    <h2>Verify Reset Code</h2>
                </section>
                <Form className="d-flex flex-column gap-3" validated={validated} style={{width: "300px"}}>
                    <Form.Group controlId="formVerifyResetCode">
                        <Form.Label>Reset Code</Form.Label>
                        <Form.Control
                            required
                            type="number"
                            placeholder="Enter reset code"
                            value={resetCode}
                            onChange={handleResetCodeChange}
                        />
                    </Form.Group>
                    <Button onClick={handleSubmit} className="w-100" variant="primary" type="submit">
                        Verify Reset Code
                    </Button>
                </Form>
            </Container>
        </PageTemplate>
    );
}
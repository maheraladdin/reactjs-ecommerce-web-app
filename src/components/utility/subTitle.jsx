import Button from "react-bootstrap/Button";

export default function SubTitle({title,buttonText,route}) {
    return (
        <section className="d-flex justify-content-between align-items-center my-3">
            <section className="h4 fw-light">
                {title}
            </section>
            <section>
                <Button title={buttonText} variant="outline-primary" className="me-2">{buttonText}</Button>
            </section>
        </section>
    );
}
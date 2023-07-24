import Button from "react-bootstrap/Button";
import {Link} from "react-router-dom";

export default function SubTitle({title,buttonText,route}) {
    return (
        <section className="d-flex justify-content-between align-items-center my-3">
            <section className="h4 fw-light">
                {title}
            </section>
            <section>
                {buttonText && (() => (
                    <Link to={route}>
                        <Button title={buttonText} variant="outline-primary" className="me-2">{buttonText}</Button>
                    </Link>
                ))()}
            </section>
        </section>
    );
}
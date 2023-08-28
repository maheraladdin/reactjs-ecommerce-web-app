import {Spinner} from "react-bootstrap";
import PageTemplate from "../../components/utility/pageTemplate";

export default function LoadingPage() {
    return (
        <PageTemplate>
            <section
                className={"d-flex justify-content-center align-items-center"}
                style={{
                height: "calc(100vh - 120px)",
            }}>
                <Spinner animation="border" role="status" variant="primary"/>
            </section>
        </PageTemplate>
    )
}
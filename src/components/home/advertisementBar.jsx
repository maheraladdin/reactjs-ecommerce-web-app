import Container from "react-bootstrap/Container";

export default function AdvertisementBar() {
    return (
        <Container
            style={{height:"200px"}}
            className="d-flex justify-content-around flex-wrap p-2 align-items-center my-5 bg-dark text-light rounded-3"
            role={"button"}
        >
            <section className="h4 fw-light">
                Advertisement
            </section>
            <section>
                <img className="w-100" src="https://via.placeholder.com/728x90.png?text=adv+image" alt="Advertisement img" />
            </section>
        </Container>
    );
}
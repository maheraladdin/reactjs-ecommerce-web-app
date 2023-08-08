import SubTitle from "./subTitle";
import Container from "react-bootstrap/Container";
import {Col, Row, Spinner} from "react-bootstrap";
import ProductCard from "../product/ProductCard";
import {productsRoute} from "../../constants/routes"

export default function BestProductViewer({products,title,loading}) {
    return (
        <Container
            style={{
                minHeight: "350px",
            }}
        >
            <SubTitle title={title} buttonText="View All" route={productsRoute} />
            <Row className="justify-content-center"
                style={{
                    minHeight: "350px",
                }}
            >
            {
                !loading ?
                products.map((product,index) => (
                    <Col
                        className="mb-4"
                        key={index}
                        xs={12}
                        sm={6}
                        lg={3}
                    >
                        <ProductCard product={product} />
                    </Col>
                )) : <Spinner animation="border" variant="primary" className={`align-self-center`} />
            }
            </Row>
        </Container>
    )
}
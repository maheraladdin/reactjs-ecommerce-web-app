import SubTitle from "./subTitle";
import Container from "react-bootstrap/Container";
import {Col, Row} from "react-bootstrap";
import ProductCard from "../product/ProductCard";
import {productsRoute} from "../../constants/routes"

export default function BestProductViewer({product}) {
    if(!product) product = {
        title:"Product",
        description: "this is our awesome product",
        image:"https://picsum.photos/200",
        rating: 4.5,
        price: 50,
    }
    return (
        <Container>
            <SubTitle title="Product" buttonText="View All" route={productsRoute} />
            <Row>
            {
                Array(4).fill().map((item,index) => (
                    <Col
                        className="mb-4"
                        key={index}
                        xs={12}
                        sm={6}
                        lg={3}
                    >
                        <ProductCard product={product} />
                    </Col>
                ))
            }
            </Row>
        </Container>
    )
}
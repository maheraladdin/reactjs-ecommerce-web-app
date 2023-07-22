import SubTitle from "../utility/subTitle";
import Container from "react-bootstrap/Container";
import CategoryCard from "../category/categoryCard";
import {Col, Row} from "react-bootstrap";

export default function CategoryHomeViewer() {
    return (
        <Container>
            <SubTitle title="Category" buttonText="View All" route="/categories" />
            <Row>
            {
                Array(6).fill().map((item,index) => (
                    <Col
                        key={index}
                        xs={6}
                        md={4}
                        lg={2}
                        className="mb-4"
                    >
                        <CategoryCard key={index} category={{name:"Category",image:"https://picsum.photos/200"}} />
                    </Col>
                ))
            }
            </Row>
        </Container>
    );
}
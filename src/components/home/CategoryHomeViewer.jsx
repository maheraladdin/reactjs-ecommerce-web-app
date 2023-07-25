import SubTitle from "../utility/subTitle";
import Container from "react-bootstrap/Container";
import CategoryCard from "../category/CategoryCard";
import {Col, Row} from "react-bootstrap";
import {categoriesRoute} from "../../constants/routes";

export default function CategoryHomeViewer() {
    return (
        <Container>
            <SubTitle title="Category" buttonText="View All" route={categoriesRoute} />
            <Row>
            {
                Array(6).fill().map((item,index) => (
                    <Col
                        key={index}
                        xs={6}
                        md={4}
                        lg={2}
                        className="mb-5"
                    >
                        <CategoryCard key={index} category={{name:"Category",image:"https://picsum.photos/200"}} />
                    </Col>
                ))
            }
            </Row>
        </Container>
    );
}
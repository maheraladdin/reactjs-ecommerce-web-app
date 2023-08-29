import SubTitle from "../utility/subTitle";
import Container from "react-bootstrap/Container";
import CategoryCard from "../category/CategoryCard";
import {Col, Row, Spinner} from "react-bootstrap";
import {categoriesRoute} from "../../constants/routes";
import useGetCategoriesHomePage from "../../Hooks/categories/useGetCategoriesHomePage";

export default function CategoryHomeViewer() {

    const {loading, categories} = useGetCategoriesHomePage();

    return (
        <Container>
            <SubTitle title="Category" buttonText="View All" route={categoriesRoute} />
            <Row
                style={{minHeight: "250px"}}
                className="justify-content-center align-items-center">
            {
                loading ? <Spinner animation="border" variant="primary" className={`align-self-center ${loading ? "visible" : "invisible"}`} />
                    : categories.length > 0 ?
                    categories.map((category,index) => (
                    <Col
                        key={index}
                        xs={6}
                        md={4}
                        lg={2}
                        className="mb-5"
                    >
                        <CategoryCard category={category} />
                    </Col>
                )) : <h3 className="text-center">No Category Found</h3>
            }
            </Row>
        </Container>
    );
}
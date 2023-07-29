import SubTitle from "../utility/subTitle";
import Container from "react-bootstrap/Container";
import CategoryCard from "../category/CategoryCard";
import {Col, Row, Spinner} from "react-bootstrap";
import {categoriesRoute} from "../../constants/routes";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {getCategories} from "../../Redux/Actions/categoryActions";

export default function CategoryHomeViewer() {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getCategories(1, 6))
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const loading = useSelector(state => state.categoryReducer.loading);
    const categories = useSelector(state => state.categoryReducer.categories);

    return (
        <Container>
            <SubTitle title="Category" buttonText="View All" route={categoriesRoute} />
            <Row
                style={{minHeight: "250px"}}
                className="justify-content-center align-items-center">
            {
                !loading ? categories.map((category,index) => (
                    <Col
                        key={index}
                        xs={6}
                        md={4}
                        lg={2}
                        className="mb-5"
                    >
                        <CategoryCard category={{name: category.name,image: category.image || "https://picsum.photos/200"}} />
                    </Col>
                )) : <Spinner animation="border" variant="primary" className={`align-self-center ${loading ? "visible" : "invisible"}`} />
            }
            </Row>
        </Container>
    );
}
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {productDetailsRoute} from "../../constants/routes";
import {Link} from "react-router-dom";


export default function ProductCard({product}) {

    return (
        <Card>
            <Button
                variant="danger"
                className="position-absolute"
                style={{
                    top: "10px",
                    left: "10px"
                }}
            >
                <i className="fa-solid fa-heart"></i>

            </Button>

            <Link to={productDetailsRoute.replace(":id",product._id)} className="text-decoration-none text-dark">
            <Card.Img variant="top" src={product.imageCover} />
            <Card.Body style={{zIndex: 2}}>
                <Card.Title>{product.title}</Card.Title>
                <Card.Text>{product.description}</Card.Text>
                <section className="d-flex justify-content-between align-items-center">
                    <section className="text-end">
                        <i className="fa-solid fa-star me-1 text-warning"></i>
                        {product.ratingsAverage}
                    </section>
                    <section className="h5 fw-light mb-0">
                        {
                            product.discountedPrice ?
                                <>
                                    <del>product.price</del> product.discountedPrice
                                </>
                                : product.price
                        }
                    </section>
                </section>
            </Card.Body>
            </Link>
        </Card>
    );
}


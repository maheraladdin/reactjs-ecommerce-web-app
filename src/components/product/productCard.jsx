import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


export default function ProductCard({product}) {
    return (
        <Card>
            <Card.Img variant="top" src={product.image} />
            <Card.ImgOverlay style={{zIndex: 1}}>
                <Button variant="danger">
                    <i className="fa-solid fa-heart"></i>
                </Button>
            </Card.ImgOverlay>
            <Card.Body style={{zIndex: 2}}>
                <Card.Title>{product.title}</Card.Title>
                <Card.Text>{product.description}</Card.Text>
                <section className="d-flex justify-content-between align-items-center">
                    <section className="text-end">
                        <i className="fa-solid fa-star me-1 text-warning"></i>
                        {product.rating}
                    </section>
                    <section className="h5 fw-light mb-0">
                        ${product.price}
                    </section>
                </section>
            </Card.Body>
        </Card>
    );
}


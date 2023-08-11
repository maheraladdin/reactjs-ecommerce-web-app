import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {adminEditProductRoute, productDetailsRoute} from "../../constants/routes";
import {Link} from "react-router-dom";
import useDeleteProduct from "../../Hooks/products/useDeleteProduct";
import {Col, Modal, Spinner} from "react-bootstrap";


export default function AdminProductCard({product}) {
	const {handleDeleteProduct, show, setShow, loading} = useDeleteProduct(product._id);
	return (
		<>
			<Col
				xl={3}
				md={4}
				sm={6}
				xs={12}
				className={`mb-4`}
			>
				<Card>
					<Link to={adminEditProductRoute.replace(":id",product._id)}>
						<Button
							variant="secondary"
							className="position-absolute"
							style={{
								top: "10px",
								left: "10px"
							}}
						>
							<i className="fa-solid fa-pen-to-square"></i>
						</Button>
					</Link>

					<Button
						variant="danger"
						className="position-absolute"
						style={{
							top: "10px",
							right: "10px"
						}}
						onClick={() => setShow(true)}
					>
						<i className="fa-solid fa-trash"></i>
					</Button>

					<Link to={productDetailsRoute.replace(":id",product._id)} className="text-decoration-none text-dark">
						<Card.Img
							style={{
								height: "200px",
								objectFit: "contain"
							}}
							variant="top" src={product.imageCover} />
						<Card.Body className="d-flex flex-column justify-content-between" style={{zIndex: 2}}>
							<Card.Title>{product.title}</Card.Title>
							<Card.Text className={"text-truncate"}>{product.description}</Card.Text>
							<section className="d-flex justify-content-between align-items-center">
								<section className="text-end">
									<i className="fa-solid fa-star me-1 text-warning"></i>
									{product.ratingsAverage}
								</section>
								<section className="h5 fw-light mb-0">
									{
										product.discountedPrice ?
											<>
												<del className={"me-2 text-danger"}>{product.price}</del>
												{product.discountedPrice}
											</>
											: product.price
									}
								</section>
							</section>
						</Card.Body>
					</Link>
				</Card>
			</Col>
			<Modal show={show} onHide={() => setShow(false)}>
				<Modal.Header closeButton>
					<Modal.Title>Delete Product</Modal.Title>
				</Modal.Header>
				<Modal.Body>are you sure Product will be deleted forever?</Modal.Body>
				<Modal.Footer>
					<Button variant="secondary" onClick={() => setShow(false)}>
						Close
					</Button>
					<Button variant="danger" onClick={handleDeleteProduct}>
						<Spinner size={"sm"} animation="border" variant="light" className={`me-2 ${!loading && "d-none"}`} />
						Delete
					</Button>
				</Modal.Footer>
			</Modal>
		</>
	);
}


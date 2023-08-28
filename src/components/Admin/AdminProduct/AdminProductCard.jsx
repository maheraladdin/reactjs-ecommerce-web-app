import Button from 'react-bootstrap/Button';
import {adminEditProductRoute} from "../../../constants/routes";
import {Link} from "react-router-dom";
import useDeleteProduct from "../../../Hooks/products/useDeleteProduct";
import {Col, Modal, Spinner} from "react-bootstrap";
import {ProductCardTemplate} from "../../product/ProductCardTemplate";


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
					<ProductCardTemplate product={product}>
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

				</ProductCardTemplate>
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


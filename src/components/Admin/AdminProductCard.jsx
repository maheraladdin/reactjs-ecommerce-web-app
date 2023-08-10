import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {productDetailsRoute} from "../../constants/routes";
import {Link} from "react-router-dom";
import useDeleteProduct from "../../Hooks/products/useDeleteProduct";


export default function AdminProductCard({product}) {
	const {handleDeleteProduct} = useDeleteProduct(product._id);
	return (
		<Card>
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

			<Button
				variant="danger"
				className="position-absolute"
				style={{
					top: "10px",
					right: "10px"
				}}
				onClick={handleDeleteProduct}
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
	);
}


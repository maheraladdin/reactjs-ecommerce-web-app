import {Link} from "react-router-dom";
import {productDetailsRoute} from "../../constants/routes";
import Card from "react-bootstrap/Card";

export function ProductCardTemplate({product,children}) {
	return (
		<Card>
			{children}
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
	)
}
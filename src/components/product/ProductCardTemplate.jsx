import {Link} from "react-router-dom";
import {productDetailsRoute} from "../../constants/routes";
import Card from "react-bootstrap/Card";
import Badge from "react-bootstrap/Badge";

export function ProductCardTemplate({product,children}) {
	return (
		<Card>
			{children}
			<Link to={productDetailsRoute.replace(":id",product._id)} className="text-decoration-none text-dark">
				<Card.Img
					style={{
						objectFit: "contain"
					}}
					variant="top" src={product.imageCover} />
				<Card.Body className="d-flex flex-column justify-content-between" style={{zIndex: 2}}>
					<Card.Title className={"text-truncate"}>{product.title}</Card.Title>
					<Card.Text className={"text-truncate"}>{product.description}</Card.Text>
					<section className="text-end">
						<i className="fa-solid fa-star me-1 text-warning"></i>
						{product.ratingsAverage}
					</section>
					<section className="h5 fw-light mb-0">
						{
							product.discountedPrice ?
								<>
									<Badge bg={"danger"} className={"me-2"} ><del>{product.price}$</del></Badge>
									<Badge>{product.discountedPrice}$</Badge>
								</>
								: <Badge>{product.price}$</Badge>
						}
					</section>
				</Card.Body>
			</Link>
		</Card>
	)
}
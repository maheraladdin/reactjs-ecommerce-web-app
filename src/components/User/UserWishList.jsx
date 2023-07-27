import {Col, Row} from "react-bootstrap";
import ProductCard from "../product/ProductCard";

export default function UserWishList() {
	return (
		<Row>
				{
					Array(20).fill().map((item, i) => (
						<Col
							xs={12}
							sm={6}
							md={4}
							lg={3}
							className="mb-4"
						>
							<ProductCard key={i + 1} />
						</Col>
					))
				}
		</Row>
	)
}
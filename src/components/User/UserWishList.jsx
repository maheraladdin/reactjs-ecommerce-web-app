import {Col, Row} from "react-bootstrap";
import ProductCard from "../product/ProductCard";
import {useSelector} from "react-redux";

export default function UserWishList() {
	const user = useSelector(state => state.userReducer.user);
	return (
		<Row>
				{	user.wishlist.length > 0 ?
					Array(20).fill().map((item, i) => (
						<Col
							xs={12}
							sm={6}
							md={4}
							lg={3}
							className="mb-4"
						>
							{/*TODO: add product prop*/}
							<ProductCard key={i + 1} />
						</Col>
					)) : (
						<Col xs={12}>
							<h3 className="text-center">Your wishlist is empty</h3>
						</Col>
					)
				}
		</Row>
	)
}
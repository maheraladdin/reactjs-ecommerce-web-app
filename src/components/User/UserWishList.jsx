import {Col, Row} from "react-bootstrap";
import ProductCard from "../product/ProductCard";
import {useSelector} from "react-redux";

export default function UserWishList() {
	const wishlist = useSelector(state => state.wishlistReducer.wishlist);
	return (
		<Row>
				{	wishlist.length > 0 ?
					wishlist.map((wishlistProduct, i) => (
						<Col
							xs={12}
							sm={6}
							md={4}
							lg={3}
							className="mb-4"
						>
							{/*TODO: add product prop*/}
							<ProductCard key={i + 1} product={wishlistProduct}/>
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
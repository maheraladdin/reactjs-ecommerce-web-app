import Container from "react-bootstrap/Container";
import {Col, Row} from "react-bootstrap";
import CartItem from "../../components/Cart/CartItem";
import {CartPay} from "../../components/Cart/CartPay";
import PageTemplate from "../../components/utility/pageTemplate";
import useGetLoggedUserCart from "../../Hooks/cart/useGetLoggedUserCart";
import Button from "react-bootstrap/Button";
import useClearCart from "../../Hooks/cart/useClearCart";
import DeleteItemFromLoggedUserCartModel from "../../components/Cart/ClearCartModel";

export default function CartPage() {
	const {cart} = useGetLoggedUserCart();
	const {handleClose, show} = useClearCart();
	return (
		<PageTemplate>
			<Container className="min-height-100vh my-5">
				<section className="h1 d-flex justify-content-between align-items-center">
					<section>Cart</section>
					<Button variant={"danger"} onClick={handleClose} >Clear Cart</Button>
				</section>
				<Row className="gap-5 gap-lg-0">
					<Col
						xs={12}
						lg={9}
						className="d-flex flex-column gap-3"
					>
						{
							cart?.items?.map((item,index) => <CartItem key={`cart-item-${index + 1}`} item={item} />)
						}
					</Col>
					<Col
						xs={12}
						lg={3}
					>
						<CartPay />
					</Col>
				</Row>
			</Container>
			<DeleteItemFromLoggedUserCartModel show={show} handleClose={handleClose} />
		</PageTemplate>
	)
}
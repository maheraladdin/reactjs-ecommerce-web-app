import Container from "react-bootstrap/Container";
import {Col, Row} from "react-bootstrap";
import CartItem from "../../components/Cart/CartItem";
import {CartPay} from "../../components/Cart/CartPay";
import PageTemplate from "../../components/utility/pageTemplate";

export default function CartPage() {
	return (
		<PageTemplate>
			<Container className="min-height-100vh my-5">
				<section className="h1">Cart</section>
				<Row className="gap-5 gap-lg-0">
					<Col
						xs={12}
						lg={9}
						className="d-flex flex-column gap-3"
					>
						{
							Array(4).fill().map((_,i) => {
								return 	<CartItem key={i} />
							})
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
		</PageTemplate>
	)
}
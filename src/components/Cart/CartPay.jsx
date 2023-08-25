import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import {Badge} from "react-bootstrap";
import useApplyCoupon from "../../Hooks/cart/useApplyCoupon";

export function CartPay() {
	const {cart, handleApplyCoupon, onChangeCoupon, loading} = useApplyCoupon();
	return (
		<section className="d-flex flex-column bg-light p-3 rounded-3 gap-3">
			<Form className="d-flex gap-3">
				<Form.Control onChange={onChangeCoupon} placeholder="code" />
				<Button onClick={handleApplyCoupon} variant={"outline-success"} disabled={loading}>
					{loading ? "Loading..." : "Apply"}
				</Button>
			</Form>
			<section className="h3 m-0 d-flex gap-3 flex-wrap">
				{cart?.totalCartDiscountedPrice ?
					<>
						<Badge bg={"danger"} className="text-decoration-line-through">{cart?.totalCartPrice} EGP</Badge>
						<Badge>{cart?.totalCartDiscountedPrice} EGP</Badge>
					</>
					:
					<Badge>{cart?.totalCartPrice} EGP</Badge>
				}

			</section>
			<Form className="d-flex gap-2 justify-content-between flex-wrap">
				<section className="d-flex gap-2 p-2"><Form.Check id={"card"} name={"payment-method"} type={"radio"} role={"button"} /> <label role="button" htmlFor={"card"}> card </label> </section>
				<section className="d-flex gap-2 p-2"><Form.Check id={"onDelivery"} name={"payment-method"} type={"radio"} role={"button"} /> <label role="button" htmlFor={"onDelivery"}> on deliveried </label> </section>
			</Form>
			<Button variant={"outline-primary"}>checkout</Button>
		</section>
	)
}
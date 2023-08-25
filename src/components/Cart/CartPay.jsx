import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import {Badge} from "react-bootstrap";
import {useSelector} from "react-redux";

export function CartPay() {
	const totalCartPrice = useSelector(state => state.cartReducer.totalCartPrice);
	return (
		<section className="d-flex flex-column bg-light p-3 rounded-3 gap-3">
			<Form className="d-flex gap-3">
				<Form.Control placeholder="code" />
				<Button variant={"outline-success"}>Apply</Button>
			</Form>
			<Badge className="py-3">
				<span>{totalCartPrice} EGP</span>
			</Badge>
			<Form className="d-flex gap-2 justify-content-between flex-wrap">
				<section className="d-flex gap-2 p-2"><Form.Check id={"card"} name={"payment-method"} type={"radio"} role={"button"} /> <label role="button" htmlFor={"card"}> card </label> </section>
				<section className="d-flex gap-2 p-2"><Form.Check id={"onDelivery"} name={"payment-method"} type={"radio"} role={"button"} /> <label role="button" htmlFor={"onDelivery"}> on deliveried </label> </section>
			</Form>
			<Button variant={"outline-primary"}>checkout</Button>
		</section>
	)
}
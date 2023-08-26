import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import {Badge} from "react-bootstrap";
import useApplyCoupon from "../../Hooks/cart/useApplyCoupon";
import useGetAddresses from "../../Hooks/addresses/useGetAddresses";
import useCheckout from "../../Hooks/orders/useCheckout";

export function CartPay() {
	const {cart, handleApplyCoupon, onChangeCoupon, loading} = useApplyCoupon();
	const {addresses} = useGetAddresses();
	const {
		address,
		onChangePaymentMethod,
		onChangeAddress,
	} = useCheckout();
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
			<Form>
				<Form.Group className="d-flex gap-2 justify-content-between flex-wrap">
					<Form.Group className="d-flex gap-2">
						<Form.Check id={"card"} value={"card"} onChange={onChangePaymentMethod} name={"payment-method"} type={"radio"} role={"button"} />
						<Form.Label role="button" htmlFor={"card"}> card </Form.Label>
					</Form.Group>
					<Form.Group className="d-flex gap-2">
						<Form.Check id={"onDelivery"} value={"onDelivery"} onChange={onChangePaymentMethod} name={"payment-method"} type={"radio"} role={"button"} />
						<Form.Label role="button" htmlFor={"onDelivery"}> on delivered </Form.Label>
					</Form.Group>
				</Form.Group>
				{
					addresses.length > 0 &&
					<Form.Group>
						<Form.Select onChange={onChangeAddress} value={address}>
							<option disabled value={""}>Choose address</option>
							{addresses.map((address, index) => <option
								key={`address-${index + 1}`}>{address.alias}</option>)}
						</Form.Select>
					</Form.Group>
				}
			</Form>
			<Button variant={"outline-primary"}>checkout</Button>
		</section>
	)
}
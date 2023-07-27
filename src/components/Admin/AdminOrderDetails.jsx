import CartItem from "../Cart/CartItem";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export default function AdminOrderDetails() {
	return (
		<section className="d-flex flex-column gap-3">
			{
				Array(6).fill().map((item, i) => {
					return (
						<CartItem key={i} />
					)
				})
			}
			<section className="d-flex flex-column gap-2 bg-light p-3 rounded-3">
				<h3>Clint Details</h3>
				<section>Username: <span className="text-black-50">maher aladdin</span></section>
				<section>phone number: <span className="text-black-50">01116491500</span></section>
				<section>Email: <span className="text-black-50">maheraladdin@std.mans.edu.eg</span></section>
				<section>total: <span className="text-black-50">6000EGP</span></section>
				<Form className="d-flex gap-2">
					<Form.Select>
						<option disabled>Order Status</option>
						<option value="1">In progress</option>
						<option value="2">Done</option>
						<option value="3">Cancel</option>
					</Form.Select>
					<Button variant="primary"> save </Button>
				</Form>
			</section>
		</section>
	)
}
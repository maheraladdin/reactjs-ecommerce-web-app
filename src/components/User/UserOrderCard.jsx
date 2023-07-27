import {Badge} from "react-bootstrap";
import UserOrderCardProduct from "./UserOrderCardProduct";

export default function UserOrderCard() {
	return (
		<section className="bg-light p-3 rounded-3 d-flex flex-column gap-3">
			<section className="h4 m-0">
				Order ID: 123456789
			</section>
			<section className="d-flex flex-column gap-3 px-3">
				{Array(3).fill().map((item, i) => <UserOrderCardProduct key={i + 1}/>)}
			</section>
			<section className="d-flex justify-content-between h4 m-0">
				<section>Status: <span className="text-success">Done</span></section>
				<section>
					<Badge>3000 EGP</Badge>
				</section>
			</section>
		</section>
	)
}
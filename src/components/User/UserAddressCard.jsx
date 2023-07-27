import Button from "react-bootstrap/Button";
import {Link} from "react-router-dom";
import {userAddressUpdateRoute} from "../../constants/routes";

export default function UserAddressCard() {
	return (
		<section className="d-flex flex-column gap-2 bg-white p-3 rounded-3">
			<section className="d-flex justify-content-between align-items-center">
				<section className="h4">Home</section>
				<section className="d-flex gap-3">
					<Link to={userAddressUpdateRoute}>
						<Button variant={"secondary"}>
							<i className="fa-solid fa-edit"></i>
						</Button>
					</Link>
					<Button variant={"danger"}>
						<i className="fa-solid fa-trash"></i>
					</Button>
				</section>
			</section>
			<section>Address Description</section>
			<section>phone number: 0000000000000</section>
		</section>
	)
}
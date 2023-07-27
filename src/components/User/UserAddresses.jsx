import UserAddressCard from "./UserAddressCard";
import Button from "react-bootstrap/Button";
import {Link} from "react-router-dom";
import {userAddAddressRoute} from "../../constants/routes";

export default function UserAddresses() {
	return (
		<section className="d-flex flex-column gap-3">
			<section className="d-flex flex-column gap-3 bg-light p-3 rounded-3">
				{
					Array(6).fill().map((item, i) => <UserAddressCard key={i + 1} />)
				}
			</section>
			<section className="d-flex justify-content-center">
				<Link to={userAddAddressRoute}>
					<Button variant="primary">
						<i className="fa-solid fa-plus"></i> Add New Address
					</Button>
				</Link>
			</section>
		</section>
	)
}
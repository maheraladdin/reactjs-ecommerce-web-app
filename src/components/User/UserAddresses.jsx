import UserAddressCard from "./UserAddressCard";
import Button from "react-bootstrap/Button";
import {Link} from "react-router-dom";
import {userAddAddressRoute} from "../../constants/routes";
import useGetAddresses from "../../Hooks/addresses/useGetAddresses";

export default function UserAddresses() {
	const {addresses} = useGetAddresses();
	return (
		<section className="d-flex flex-column gap-3">
			{
				addresses.length ?
					<section className="d-flex flex-column gap-3 bg-light p-3 rounded-3">
					{
						addresses.map((address, i) => <UserAddressCard key={`address-${i + 1}`} address={address}/>)
					}
					</section>
					: null
			}
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
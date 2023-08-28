import {UserTemplate} from "../../components/User/UserTemplate";
import UserAddresses from "../../components/User/UserAddress/UserAddresses";

export default function UserAddressesPage() {
	return (
		<UserTemplate title="Addresses" >
			<UserAddresses />
		</UserTemplate>
	)
}
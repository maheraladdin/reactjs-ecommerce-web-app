import {UserTemplate} from "../../components/User/UserTemplate";
import UserAddresses from "../../components/User/UserAddresses";

export default function UserAddressesPage() {
	return (
		<UserTemplate title="Addresses" >
			<UserAddresses />
		</UserTemplate>
	)
}
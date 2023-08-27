import {UserTemplate} from "../../components/User/UserTemplate";
import UserAddNewAddress from "../../components/User/UserAddNewAddress";

export default function UserAddNewAddressPage() {
	return (
		<UserTemplate title={"Add new Address"}>
			<UserAddNewAddress />
		</UserTemplate>
	)
}
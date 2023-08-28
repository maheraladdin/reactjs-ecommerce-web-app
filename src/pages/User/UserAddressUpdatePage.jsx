import {UserTemplate} from "../../components/User/UserTemplate";
import UserAddressUpdate from "../../components/User/UserAddress/UserAddressUpdate";

export default function UserAddressUpdatePage() {
	return (
		<UserTemplate title={"Update Address"} >
			<UserAddressUpdate />
		</UserTemplate>
	)
}
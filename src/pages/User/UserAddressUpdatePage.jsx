import {UserTemplate} from "../../components/User/UserTemplate";
import UserAddressUpdate from "../../components/User/UserAddressUpdate";

export default function UserAddressUpdatePage() {
	return (
		<UserTemplate title={"Update Address"} >
			<UserAddressUpdate />
		</UserTemplate>
	)
}
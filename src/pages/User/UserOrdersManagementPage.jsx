import {UserTemplate} from "../../components/User/UserTemplate";
import UserOrdersBrowser from "../../components/User/UserOrdersBrowser";

export function UserOrdersManagementPage() {
	return (
		<UserTemplate title={"Orders Management"}>
			<UserOrdersBrowser />
		</UserTemplate>
	)
}
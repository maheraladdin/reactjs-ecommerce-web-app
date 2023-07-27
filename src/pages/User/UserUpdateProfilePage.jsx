import {UserTemplate} from "../../components/User/UserTemplate";
import UserUpdateProfile from "../../components/User/UserUpdateProfile";

export default function UserUpdateProfilePage() {
	return (
		<UserTemplate title={"update profile details"} pagination={false}>
			<UserUpdateProfile />
		</UserTemplate>
	)
}
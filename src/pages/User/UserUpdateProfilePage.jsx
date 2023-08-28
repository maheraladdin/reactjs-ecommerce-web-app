import {UserTemplate} from "../../components/User/UserTemplate";
import UserUpdateProfile from "../../components/User/UserProfile/UserUpdateProfile";

export default function UserUpdateProfilePage() {
	return (
		<UserTemplate title={"update profile details"} >
			<UserUpdateProfile />
		</UserTemplate>
	)
}
import {UserTemplate} from "../../components/User/UserTemplate";
import UserProfile from "../../components/User/UserProfile";

export default function UserProfilePage() {
	return (
		<UserTemplate title={"Profile"} pagination={false}>
			<UserProfile />
		</UserTemplate>
	)
}
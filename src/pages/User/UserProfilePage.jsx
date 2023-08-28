import {UserTemplate} from "../../components/User/UserTemplate";
import UserProfile from "../../components/User/UserProfile/UserProfile";

export default function UserProfilePage() {
	return (
		<UserTemplate title={"Profile"} >
			<UserProfile />
		</UserTemplate>
	)
}
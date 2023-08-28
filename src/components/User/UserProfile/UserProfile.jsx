import UserProfileDetails from "./UserProfileDetails";
import UserChangePassword from "./UserChangePassword";

export default function UserProfile() {
	return (
		<section className="d-flex flex-column gap-3">
			<UserProfileDetails />
			<UserChangePassword />
		</section>
	)
}
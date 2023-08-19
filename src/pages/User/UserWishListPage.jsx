import {UserTemplate} from "../../components/User/UserTemplate";
import UserWishList from "../../components/User/UserWishList";

export default function UserWishListPage() {
	return (
		<UserTemplate title="Wishlist" pagination={false}>
			<UserWishList />
		</UserTemplate>
	)
}
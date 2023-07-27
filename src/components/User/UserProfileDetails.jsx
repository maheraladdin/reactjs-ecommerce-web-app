import Button from "react-bootstrap/Button";
import {Link} from "react-router-dom";
import {userUpdateProfileRoute} from "../../constants/routes";

export default function UserProfileDetails() {
	return (
		<section className="d-flex flex-column gap-2 bg-light p-3 rounded-3">
			<section className="bg-white p-3 rounded-3">
				Username: <span className="text-black-50">maher aladdin</span>
			</section>
			<section className="bg-white p-3 rounded-3">Phone Number: <span className="text-black-50">0000000000 </span></section>
			<section className="bg-white p-3 rounded-3">Email: <span className="text-black-50">maheraladdin@std.mans.edu.eg </span></section>
			<Link className="align-self-end" to={userUpdateProfileRoute}>
				<Button variant={"secondary"}>
					<i className="fa-solid fa-edit"></i> Update Profile
				</Button>
			</Link>
		</section>
	)
}
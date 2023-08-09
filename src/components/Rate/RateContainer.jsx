import Pagination from "../utility/Pagination";
import UserRate from "./UserRate";
import AddRate from "./AddRate";
import {useSelector} from "react-redux";

export default function RateContainer() {
	const reviews = useSelector(state => state.reviewReducer.reviews);
	const numberOfPages = useSelector(state => state.reviewReducer.numberOfPages);
	console.log(numberOfPages);
	return (
		<section className="d-flex flex-column gap-4 bg-light px-5 py-4 rounded-5">
			<AddRate />
			{
				reviews.map((review,index) => <UserRate rate={review.rating} name={review.user.name} comment={review.comment} profileImg={review.profileImg} key={"review-key-" + index + 1} />)
			}
			{numberOfPages > 1 && <Pagination pageCount={numberOfPages}/>}
		</section>
	)
}
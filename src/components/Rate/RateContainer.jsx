import Pagination from "../utility/Pagination";
import UserRate from "./UserRate";
import AddRate from "./AddRate";
import useGetReviews from "../../Hooks/reviews/useGetReviews";

export default function RateContainer() {

	const {
		reviews,
		numberOfPages,
		handlePageChange,
		user,
		isReviewed,
	} = useGetReviews();

	return (
		<section className="d-flex flex-column gap-4 bg-light px-5 py-4 rounded-5">
			{
				isReviewed ? reviews.map((review,index) => {
					if(user._id === review.user._id)
						return (
							<UserRate
								reviewId={review._id}
								rate={review.rating}
								name={review.user.name}
								comment={review.comment}
								profileImg={review.profileImg}
								key={"review-key-" + index + 1}
								myRate={true}
							/>
						)
					else
						return null;
				})  : user.role === "user" ? <AddRate /> : null
			}
			{
				reviews.map((review,index) => {
					if(user._id !== review.user._id)
					return (
						<UserRate rate={review.rating} name={review.user.name} comment={review.comment}
							  profileImg={review.profileImg} key={"review-key-" + index + 1}/>
					)
					else
						return null;
				})
			}
			{numberOfPages > 1 && <Pagination pageCount={numberOfPages} handlePageChange={handlePageChange}/>}
		</section>
	)
}
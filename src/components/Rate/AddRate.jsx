import ReactStars from "react-rating-stars-component";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export default function AddRate() {
	return (
		<Form className="d-flex flex-column gap-2">
			<Form.Text className="d-flex gap-2 align-items-center">
				<section className="h3">username</section>
				<section>
					<ReactStars
						count={5}
						onChange={(newRating) => {
							console.log("new rating: ", newRating)
						}}
						size={24}
						isHalf={true}
						emptyIcon={<i className="far fa-star"></i>}
						halfIcon={<i className="fa fa-star-half-alt"></i>}
						fullIcon={<i className="fa fa-star"></i>}
						activeColor="#ffc107"
					/>
				</section>
			</Form.Text>
			<Form.Control
				as="textarea"
				rows={3}
				placeholder="what do you think about this product?"
				className="resize-none"
			/>
			<Button className="w-fit-content align-self-end">
				Add Comment
			</Button>
		</Form>
	)
}
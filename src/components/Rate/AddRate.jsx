import ReactStars from "react-rating-stars-component";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import useAddRate from "../../Hooks/reviews/useAddRate";
import {Spinner} from "react-bootstrap";

export default function AddRate() {
	const {comment, rate, handleCommentChange, handleRateChange, handleAddRate, loading, username} = useAddRate();
	return (
		<Form className="d-flex flex-column gap-2">
			<Form.Text className="d-flex gap-2 align-items-center">
				<section className="h3 m-0">{username}</section>
				<section>
					<ReactStars
						count={5}
						onChange={handleRateChange}
						size={24}
						isHalf={true}
						emptyIcon={<i className="far fa-star"></i>}
						halfIcon={<i className="fa fa-star-half-alt"></i>}
						fullIcon={<i className="fa fa-star"></i>}
						activeColor="#ffc107"
						value={rate}
					/>
				</section>
			</Form.Text>
			<Form.Control
				as="textarea"
				rows={3}
				placeholder="what do you think about this product?"
				className="resize-none"
				value={comment}
				onChange={handleCommentChange}
			/>
			<Button onClick={handleAddRate} className="w-fit-content align-self-end">
				{loading && <Spinner variant="light" animation="border" size="sm" className="me-2" />}
			 	Add Comment
			</Button>
		</Form>
	)
}
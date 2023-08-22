import useUpdateOrDeleteMyReview from "../../Hooks/reviews/useUpdateOrDeleteMyReview";
import {Modal} from "react-bootstrap";
import Form from "react-bootstrap/Form";
import ReactStars from "react-rating-stars-component";
import Button from "react-bootstrap/Button";

export default function UserRate({name,rate,comment,profileImg,myRate,reviewId}) {

	const {
		loading,
		handleRateChange,
		handleCommentChange,
		newComment,
		newRate,
		handleUpdateReview,
		handleDeleteReview,
		showUpdateModel,
		showDeleteModel,
		handleShowUpdateModel,
		handleShowDeleteModel,
	} = useUpdateOrDeleteMyReview(reviewId,rate,comment);

	return (
		<section className={`d-flex align-items-center gap-3 bg-white p-3 rounded-3 ${myRate && "border border-4 border-primary"}`}>
			<section>
				<img src={profileImg || "https://picsum.photos/50/50"} alt="user" className="rounded-circle" />
			</section>
			<section className="d-flex flex-column gap-2">
				<section>{name} {
					rate > 2.5 ?
						<i className="fa-solid fa-star text-warning"></i> :
						<i className="fa fa-star-half-alt text-warning"></i>
						} {rate}</section>
				<section>{comment}</section>
			</section>
			{
				myRate && (
					<section className="d-flex flex-column gap-3 ms-auto">
						<section onClick={handleShowUpdateModel} role={"button"} className="fa-solid fa-edit text-primary"></section>
						<section onClick={handleShowDeleteModel} role={"button"} className={`fa-solid fa-trash text-danger`}></section>
					</section>
				)
			}
			<Modal show={showUpdateModel} onHide={handleShowUpdateModel}>
				<Modal.Header closeButton>
					<Modal.Title>Update your review</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<Form className={"d-flex flex-column gap-3"}>
						<Form.Group controlId="exampleForm.ControlInput1">
							<Form.Label>Rate</Form.Label>
							<ReactStars
								count={5}
								onChange={handleRateChange}
								size={24}
								isHalf={true}
								emptyIcon={<i className="far fa-star"></i>}
								halfIcon={<i className="fa fa-star-half-alt"></i>}
								fullIcon={<i className="fa fa-star"></i>}
								activeColor="#ffc107"
								value={newRate}
							/>
						</Form.Group>
						<Form.Group controlId="exampleForm.ControlTextarea1">
							<Form.Label>Comment</Form.Label>
							<Form.Control className={"resize-none"} as="textarea" rows={3}  onChange={handleCommentChange} value={newComment} />
						</Form.Group>
						<Button variant={"primary"} onClick={handleUpdateReview} disabled={loading}>
							{loading ? "Loading..." : "Update"}
						</Button>
					</Form>
				</Modal.Body>
			</Modal>
			<Modal show={showDeleteModel} onHide={handleShowDeleteModel}>
				<Modal.Header closeButton>
					<Modal.Title>Delete your review</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<Form className={"d-flex flex-column gap-3"}>
						<Form.Group controlId="exampleForm.ControlInput1">
							<Form.Label>Are you sure you want to delete your review?</Form.Label>
						</Form.Group>
						<Button variant={"danger"} onClick={handleDeleteReview} disabled={loading}>
							{loading ? "Loading..." : "Delete"}
						</Button>
					</Form>
				</Modal.Body>
			</Modal>
		</section>
	)
}
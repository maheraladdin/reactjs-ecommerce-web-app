export default function UserRate({name,rate,comment,profileImg,myRate,reviewId}) {

	return (
		<section className={`d-flex align-items-center gap-3 bg-white p-3 rounded-3 ${myRate && "border border-4 border-primary"}`}>
			<section>
				<img src={profileImg || "https://picsum.photos/50/50"} alt="user" className="rounded-circle" />
			</section>
			<section className="d-flex flex-column gap-2">
				<section>{name} <i className="fa-solid fa-star text-warning"></i> {rate}</section>
				<section>{comment}</section>
			</section>
			{
				myRate && (
					<section className="d-flex flex-column gap-3 ms-auto">
						<section role={"button"} className="fa-solid fa-edit text-primary"></section>
						<section role={"button"} className={`fa-solid fa-trash text-danger`}></section>
					</section>
				)
			}
		</section>
	)
}
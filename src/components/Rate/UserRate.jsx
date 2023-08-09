export default function UserRate({name,rate,comment,profileImg}) {
	return (
		<section className="d-flex align-items-center gap-3 bg-white p-3 rounded-3">
			<section>
				<img src={profileImg || "https://picsum.photos/50/50"} alt="user" className="rounded-circle" />
			</section>
			<section className="d-flex flex-column gap-2">
				<section>{name} <i className="fa-solid fa-star text-warning"></i> {rate}</section>
				<section>{comment}</section>
			</section>
		</section>
	)
}
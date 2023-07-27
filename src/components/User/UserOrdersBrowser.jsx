import UserOrderCard from "./UserOrderCard";

export default function UserOrdersBrowser() {
	return (
		<section className="d-flex flex-column gap-3">
			{
				Array(6).fill().map((item, i) => {
					return (
						<UserOrderCard key={i + 1}/>
					)
				})
			}
		</section>
	)
}
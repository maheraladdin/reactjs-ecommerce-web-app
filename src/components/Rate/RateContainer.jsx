import Pagination from "../utility/Pagination";
import UserRate from "./UserRate";
import AddRate from "./AddRate";

export default function RateContainer() {
	return (
		<section className="d-flex flex-column gap-4 bg-light px-5 py-4 rounded-5">
			<AddRate />
			{
				Array(6).fill().map((_,i) => <UserRate key={i + 1} />)
			}
			<Pagination pageCount={100} />
		</section>
	)
}
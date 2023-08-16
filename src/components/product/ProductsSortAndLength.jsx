import {Dropdown} from "react-bootstrap";
import Button from "react-bootstrap/Button";
import useSortProducts from "../../Hooks/products/useSortProducts";

export default function ProductsSortAndLength() {
	const {
		numberOfDocuments,
		sortHandler,
		asc,
		ascHandler,
	} = useSortProducts();
	return (
		<section className="d-flex justify-content-between align-items-center py-3 flex-wrap">
			<section className="h4">
				Results: {numberOfDocuments}
			</section>
			<section>
				<Dropdown className="d-inline mx-2">
					<Dropdown.Toggle id="dropdown-autoclose-true">
						Sort By
					</Dropdown.Toggle>

					<Dropdown.Menu>
						<Dropdown.Item onClick={sortHandler}>no sort</Dropdown.Item>
						<Dropdown.Item onClick={sortHandler}>sold</Dropdown.Item>
						<Dropdown.Item onClick={sortHandler}>rating</Dropdown.Item>
						<Dropdown.Item onClick={sortHandler}>price</Dropdown.Item>
					</Dropdown.Menu>
				</Dropdown>
				<Button onClick={ascHandler} className="py-0 px-1">
					<i className={`fa-solid fa-sort-${asc ? "up" : "down"}`}></i>
				</Button>
			</section>
		</section>
	)
}
import {Dropdown} from "react-bootstrap";
import Button from "react-bootstrap/Button";

export default function ProductsSortAndLength() {
	return (
		<section className="d-flex justify-content-between align-items-center py-3 flex-wrap">
			<section className="h4">
				Results: 5
			</section>
			<section>
				<Dropdown className="d-inline mx-2">
					<Dropdown.Toggle id="dropdown-autoclose-true">
						Sort By
					</Dropdown.Toggle>

					<Dropdown.Menu>
						<Dropdown.Item>sold</Dropdown.Item>
						<Dropdown.Item>rating</Dropdown.Item>
						<Dropdown.Item>price</Dropdown.Item>
					</Dropdown.Menu>
				</Dropdown>
				<Button className="py-0 px-1">
					<i className="fa-solid fa-sort-up"></i>
				</Button>
			</section>
		</section>
	)
}
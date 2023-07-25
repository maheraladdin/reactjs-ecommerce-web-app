import {Dropdown} from "react-bootstrap";
import Button from "react-bootstrap/Button";

export default function ProductsSortAndLength() {
	return (
		<section className="d-flex justify-content-between align-items-center py-3 flex-wrap flex-row-reverse">
			<section className="h4">
				Results: 5
			</section>
			<section>
				<Dropdown className="d-inline mx-2">
					<Dropdown.Toggle id="dropdown-autoclose-true">
						Sort By
					</Dropdown.Toggle>

					<Dropdown.Menu>
						<Dropdown.Item>Menu Item</Dropdown.Item>
						<Dropdown.Item>Menu Item</Dropdown.Item>
						<Dropdown.Item>Menu Item</Dropdown.Item>
					</Dropdown.Menu>
				</Dropdown>
				<Button>
					<i className="fa-solid fa-sort-up"></i>
				</Button>
			</section>
		</section>
	)
}
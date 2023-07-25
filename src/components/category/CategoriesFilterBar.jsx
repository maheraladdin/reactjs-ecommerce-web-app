import Nav from 'react-bootstrap/Nav';
import {Link} from "react-router-dom";
import {categoriesRoute} from "../../constants/routes";

export default function ProductBrowser() {
	return (
		<Nav variant="underline" defaultActiveKey="/all">
			<Nav.Item>
				<Nav.Link eventKey="/all">All</Nav.Link>
			</Nav.Item>
			{
				Array(3).fill().map((e,i) => {
					return (
						<Nav.Item>
							<Nav.Link eventKey={`category-${i + 1}`}>Cat {i + 1}</Nav.Link>
						</Nav.Item>
					)
				})
			}
			<Nav.Item>
				<Nav.Link eventKey="/others">
					<Link to={categoriesRoute} className="text-decoration-none">
						others
					</Link>
				</Nav.Link>
			</Nav.Item>
		</Nav>
	);
}
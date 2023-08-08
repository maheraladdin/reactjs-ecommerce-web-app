import Container from "react-bootstrap/Container";
import ProductsSortAndLength from "../../components/product/ProductsSortAndLength";
import SidebarFilter from "../../components/utility/SidebarFilter";
import ProductsViewer from "../../components/product/ProductsViewer";
import {Col, Row} from "react-bootstrap";

export default function ProductBrowser() {
	return (
		<section>
			<Container className="min-height-100vh">
				<ProductsSortAndLength />
				<Row>
					<Col
						sm={12}
						md={4}
						lg={2}
					>
						<SidebarFilter />
					</Col>
					<Col
						sm={12}
						md={8}
						lg={10}
					>
						<ProductsViewer />
					</Col>
				</Row>
			</Container>
		</section>
	)
}
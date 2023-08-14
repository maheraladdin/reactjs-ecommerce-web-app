import Container from "react-bootstrap/Container";
import ProductsSortAndLength from "../../components/product/ProductsSortAndLength";
import SidebarFilter from "../../components/utility/SidebarFilter";
import ProductsViewer from "../../components/product/ProductsViewer";
import {Col, Row} from "react-bootstrap";
import useFilterProducts from "../../Hooks/products/useFilterProducts";
import PageTemplate from "../../components/utility/pageTemplate";

export default function ProductBrowserPage() {
	const {setQueryString} = useFilterProducts();
	return (
		<PageTemplate>
			<Container className="min-height-100vh">
				<ProductsSortAndLength setQueryString={setQueryString}/>
				<Row>
					<Col
						sm={12}
						md={4}
						lg={2}
					>
						<SidebarFilter setQueryString={setQueryString}/>
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
		</PageTemplate>
	)
}
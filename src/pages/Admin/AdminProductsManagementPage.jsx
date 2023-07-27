import {Col, Row} from "react-bootstrap";
import Container from "react-bootstrap/Container";
import AdminSidebar from "../../components/Admin/AdminSidebar";
import AdminProducts from "../../components/Admin/AdminProducts";
import Pagination from "../../components/utility/Pagination";

export function AdminProductsManagementPage() {
	return (
		<Container className="py-4">
			<Row className="py-3 gap-3 gap-lg-0">
				<Col
					xs={12}
					lg={3}
				>
					<AdminSidebar />
				</Col>
				<Col
					xs={12}
					lg={9}
				>
					<AdminProducts />
					<Pagination pageCount={100} />
				</Col>
			</Row>
		</Container>
	)
}
import {Col, Row} from "react-bootstrap";
import AdminSidebar from "../../components/Admin/AdminSidebar";
import Pagination from "../../components/utility/Pagination";
import Container from "react-bootstrap/Container";

export default function  AdminOrdersManagementPage() {
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

					<Pagination pageCount={100} />
				</Col>
			</Row>
		</Container>
	)
}
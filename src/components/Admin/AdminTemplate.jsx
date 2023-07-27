import {Badge, Col, Row} from "react-bootstrap";
import AdminSidebar from "./AdminSidebar";
import Pagination from "../utility/Pagination";
import Container from "react-bootstrap/Container";

export default function AdminTemplate({title, children, pagination = true}) {
	return (
		<Container className="py-4" style={{
			minHeight: "calc(100vh - 70px)"
		}}>
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
					{title ? <h2 className="pb-2"><Badge>{title}</Badge></h2> : null}
					{children}
					{pagination ? <Pagination pageCount={100}/> : null}
				</Col>
			</Row>
		</Container>
	)
}
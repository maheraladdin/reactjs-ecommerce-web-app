import {Badge, Col, Row} from "react-bootstrap";
import LoggedUserSidebar from "../utility/LoggedUserSidebar";
import Container from "react-bootstrap/Container";
import {adminSideBarContent} from "../../constants/adminSidebarContent";
import PageTemplate from "../pageTemplate";

export default function AdminTemplate({title, children}) {
	return (
		<PageTemplate>
			<Container className="py-4" style={{
				minHeight: "calc(100vh - 70px)"
			}}>
				<Row className="py-3 gap-3 gap-lg-0">
					<Col
						xs={12}
						lg={3}
					>
						<LoggedUserSidebar content={adminSideBarContent} role={"Admin"}/>
					</Col>
					<Col
						xs={12}
						lg={9}
					>
						{title ? <h2 className="pb-2 text-capitalize"><Badge>{title}</Badge></h2> : null}
						{children}
					</Col>
				</Row>
			</Container>
		</PageTemplate>
	)
}
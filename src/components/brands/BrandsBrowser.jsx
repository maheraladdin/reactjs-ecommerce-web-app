import {Col, Row} from "react-bootstrap";
import BrandCard from "./BrandCard";

export default function BrandsBrowser() {
	return (
		<>
			<Row>
				{
					Array(12).fill(0).map((_, i) => (
						<Col
							key={i}
							xs={6}
							md={4}
							lg={3}
							xl={2}
							className="mb-5"
						>
							<BrandCard key={i} brand={{image: "https://picsum.photos/200"}}/>
						</Col>
					))
				}
			</Row>
		</>
	)
}
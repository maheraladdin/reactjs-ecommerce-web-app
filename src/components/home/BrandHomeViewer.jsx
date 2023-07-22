import Container from "react-bootstrap/Container";
import BrandCard from "../brands/BrandCard";
import SubTitle from "../utility/subTitle";
import {Col, Row} from "react-bootstrap";

export default function BrandHomeViewer() {
	return (
		<Container>
			<SubTitle title="Brands" buttonText="View All" />
			<Row>
			{
				Array(6).fill(0).map((_, i) => (
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
		</Container>
	)
}
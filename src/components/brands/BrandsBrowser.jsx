import {Col, Row} from "react-bootstrap";
import BrandCard from "./BrandCard";
import {useSelector} from "react-redux";

export default function BrandsBrowser() {
	const brands = useSelector(state => state.brandReducer.brands);
	return (
		<>
			<Row>
				{
					brands.map((brand, i) => (
						<Col
							key={i}
							xs={6}
							md={4}
							lg={3}
							xl={2}
							className="mb-5"
						>
							<BrandCard key={i} brand={brand}/>
						</Col>
					))
				}
			</Row>
		</>
	)
}
import {Col, Row} from "react-bootstrap";
import {ProductGallery} from "./ProductGallery";
import {ProductData} from "./ProductData";

export default function ProductDetails() {
	return (
		<Row className="gap-5 gap-lg-0">
			<Col
				lg={4}
			>
				<ProductGallery />
			</Col>
			<Col
				lg={8}
			>
				<ProductData />
			</Col>
		</Row>
	)
}
import {Col, Row} from "react-bootstrap";
import {ProductGallery} from "./ProductGallery";
import {ProductData} from "./ProductData";
import useHandleLoveButtonProductDetails from "../../Hooks/products/useHandleLoveButtonProductDetails";

export default function ProductDetails() {
	useHandleLoveButtonProductDetails();
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
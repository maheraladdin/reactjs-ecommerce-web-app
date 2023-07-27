import {Col, Row} from "react-bootstrap";
import AdminProductCard from "./AdminProductCard";

export default function AdminProducts({product}) {

	if(!product) product = {
		title:"Product",
		description: "this is our awesome Product",
		image:"https://picsum.photos/200",
		rating: 4.5,
		price: 50
	}

	return (
		<>
		<Row className="gap-3 gap-sm-0">
			{
				Array(20).fill().map((e,i) => (
					<Col
						xl={3}
						md={4}
						sm={6}
						xs={12}
						key={i}
						className={"mb-4"}
					>
						<AdminProductCard product={product}/>
					</Col>
				))
			}
		</Row>
		</>
	)
}
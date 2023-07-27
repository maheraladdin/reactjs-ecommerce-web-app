import {Col, Row} from "react-bootstrap";
import ProductCard from "./ProductCard";
import Pagination from "../utility/Pagination";

export default function ProductsViewer({product, numberOfProducts}) {

	if(!product) product = {
		title:"Product",
		description: "this is our awesome Product",
		image:"https://picsum.photos/200",
		rating: 4.5,
		price: 50,
	}

	if(!numberOfProducts) numberOfProducts = 20;

	return (
		<section className="d-flex flex-column">
			<Row>
				{
					Array(numberOfProducts).fill().map((item,index) => (
						<Col
							className="mb-4"
							key={index}
							xs={12}
							sm={6}
							lg={3}
						>
							<ProductCard product={product} />
						</Col>
					))
				}
			</Row>
			<Pagination pageCount={100} />
		</section>
	)
}
import {Col, Row, Spinner} from "react-bootstrap";
import ProductCard from "./ProductCard";
import Pagination from "../utility/Pagination";
import useGetProducts from "../../Hooks/products/useGetProducts";

export default function ProductsViewer() {

	const { loading, products, numberOfPages, handlePageChange } = useGetProducts();

	return (
		<section className="d-flex flex-column">
			<Row className={`${loading ? "justify-content-center" : ""} min-height-100vh`}>
				{
					!loading ?
						products.map((product,index) => (
						<Col
							className="mb-4"
							key={"product-" + (index + 1)}
							xs={12}
							sm={6}
							lg={3}
						>
							<ProductCard product={product} />
						</Col>
					)) : <Spinner animation="border" variant="primary" className={`align-self-center ${loading ? "visible" : "invisible"}`} />
				}
			</Row>
			{!loading && <Pagination pageCount={numberOfPages} handlePageChange={handlePageChange} />}
		</section>
	)
}
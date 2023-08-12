import {Row, Spinner} from "react-bootstrap";
import AdminProductCard from "./AdminProductCard";
import Pagination from "../utility/Pagination";
import useGetProducts from "../../Hooks/products/useGetProducts";

export default function AdminProducts() {

	const { loading, products, numberOfPages, handlePageChange } = useGetProducts();
	return (
		<>
			<Row className={`"gap-3 gap-sm-0 ${loading ? "justify-content-center align-items-center" : ""} min-height-100vh`}>
				{
					!loading ?
					products.map((product,index) => (
						<AdminProductCard key={"admin-product-" + (index + 1)} product={product} />
					)) : <Spinner animation="border" variant="primary" className={`align-self-center ${loading ? "visible" : "invisible"}`} />
				}
			</Row>
			{!loading && <Pagination pageCount={numberOfPages} handlePageChange={handlePageChange} />}
		</>
	)
}
import CategoriesFilterBar from "../../components/category/CategoriesFilterBar";
import Container from "react-bootstrap/Container";
import ProductsSortAndLength from "../../components/product/ProductsSortAndLength";

export default function ProductBrowser() {
	return (
		<section>
			<Container className="min-height-100vh">
				<CategoriesFilterBar />
				<ProductsSortAndLength />
			</Container>
		</section>
	)
}
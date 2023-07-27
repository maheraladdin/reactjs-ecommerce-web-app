import CategoriesBrowser from "../../components/category/CategoriesBrowser";
import Container from "react-bootstrap/Container";
import Pagination from "../../components/utility/Pagination";

export default function CategoriesPage() {
	return (
		<Container className="d-flex flex-column justify-content-center" style={{minHeight: "100vh"}}>
			<section className="h1 pb-4">Categories</section>
			<CategoriesBrowser />
			<Pagination pageCount={100} />
		</Container>
	)
}
import Container from "react-bootstrap/Container";
import Pagination from "../../components/utility/Pagination";
import BrandsBrowser from "../../components/brands/BrandsBrowser";

export default function BrandsPage() {
	return (
		<>
			<Container className="d-flex flex-column justify-content-center" style={{minHeight: "100vh"}}>
				<section className="h1 pb-4">Brands</section>
				<BrandsBrowser />
				<Pagination pageCount={100} />
			</Container>
		</>
	)
}
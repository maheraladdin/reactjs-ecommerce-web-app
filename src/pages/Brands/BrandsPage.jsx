import Pagination from "../../components/utility/Pagination";
import BrandsBrowser from "../../components/brands/BrandsBrowser";
import useGetBrandsPage from "../../Hooks/brands/useGetBrandsPage";
import PageTemplate from "../../components/utility/pageTemplate";
import {Spinner, Container} from "react-bootstrap";

export default function BrandsPage() {
	const {loading, numOfPages, handlePageChange} = useGetBrandsPage();
	return (
		<PageTemplate>
			<Container className="d-flex flex-column min-vh-100 my-3">
				<section className="h1 pb-4">Brands</section>
				{
					loading ? <Spinner animation="border" variant="primary" className={`align-self-center ${loading ? "visible" : "invisible"}`} />
						: (
						<>
							<BrandsBrowser />
							{numOfPages > 1 ?
								<Pagination
									pageCount={numOfPages}
									handlePageChange={handlePageChange}
								/> : null}
						</>
					)
				}
			</Container>
		</PageTemplate>
	)
}
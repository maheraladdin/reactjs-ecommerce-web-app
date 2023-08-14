import Container from "react-bootstrap/Container";
import Pagination from "../../components/utility/Pagination";
import BrandsBrowser from "../../components/brands/BrandsBrowser";
import useGetBrandsPage from "../../Hooks/brands/useGetBrandsPage";
import PageTemplate from "../../components/utility/pageTemplate";

export default function BrandsPage() {
	const {loading, numOfPages, handlePageChange} = useGetBrandsPage();
	return (
		<PageTemplate>
			<Container className="d-flex flex-column justify-content-center" style={{minHeight: "100vh"}}>
				<section className="h1 pb-4">Brands</section>
				{
					!loading && (
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
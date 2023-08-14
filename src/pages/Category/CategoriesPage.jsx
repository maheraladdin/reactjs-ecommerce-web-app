import CategoriesBrowser from "../../components/category/CategoriesBrowser";
import Container from "react-bootstrap/Container";
import Pagination from "../../components/utility/Pagination";
import {Spinner} from "react-bootstrap";
import useGetCategoriesPage from "../../Hooks/categories/useGetCategoriesPage";
import PageTemplate from "../../components/pageTemplate";
export default function CategoriesPage() {

	const {loading, numOfPages, handlePageChange} = useGetCategoriesPage();

	return (
		<PageTemplate>
			<Container className={`d-flex flex-column my-5`} style={{minHeight: "100vh"}}>
				<section className="h1 pb-4">Categories</section>
				<Spinner animation="border" variant="primary" className={`align-self-center ${loading ? "visible" : "invisible"}`} />
				{
					!loading && (
						<>
							<CategoriesBrowser/>
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
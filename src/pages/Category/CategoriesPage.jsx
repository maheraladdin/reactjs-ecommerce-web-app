import CategoriesBrowser from "../../components/category/CategoriesBrowser";
import Container from "react-bootstrap/Container";
import Pagination from "../../components/utility/Pagination";
import {useDispatch, useSelector} from "react-redux";
import {getCategories} from "../../Redux/Actions/categoryActions";
import {useEffect} from "react";
import {Spinner} from "react-bootstrap";
export default function CategoriesPage() {

	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getCategories(1))
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const numOfPages = useSelector(state => state.categoryReducer.numberOfPages);
	const loading = useSelector(state => state.categoryReducer.loading);


	return (
		<Container className="d-flex flex-column my-5" style={{minHeight: "100vh"}}>
			<section className="h1 pb-4">Categories</section>
			<Spinner animation="border" variant="primary" className={`align-self-center ${loading ? "visible" : "invisible"}`} />
			{
				!loading && (
					<>
						<CategoriesBrowser/>
						<Pagination pageCount={numOfPages} handlePageChange={(page) => dispatch(getCategories(page.selected + 1))}/>
					</>
				)
				}
		</Container>
	)
}
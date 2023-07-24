import ReactPaginate from "react-paginate";

export default function Pagination({pageCount,handlePageChange}) {
	return (
		<nav aria-label="Search results pages">
	        <ReactPaginate
				onPageChange={handlePageChange}
				className="pagination justify-content-center user-select-none"
				previousLabel={"← Previous"}
				nextLabel={"Next →"}
				breakLabel={"..."}
				pageCount={pageCount}
				marginPagesDisplayed={3}
				pageClassName={"page-item"}
				previousClassName={"page-item rounded-pill"}
				previousLinkClassName={"page-link"}
				nextClassName={"page-item rounded-pill"}
				nextLinkClassName={"page-link"}
				disabledClassName={"disabled"}
				activeClassName={"active"}
				pageLinkClassName={"page-link"}
				breakLinkClassName={"page-link"}
			/>
		</nav>
	)
}
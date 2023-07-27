import {
	adminAddBrandRoute,
	adminAddCategoryRoute, adminAddProductRoute,
	adminAddSubcategoryRoute,
	adminOrdersRoute,
	adminProductsRoute
} from "../../constants/routes";
import {Link} from "react-router-dom";
import {useState} from "react";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";

export default function AdminSidebar() {

	const [show, setShow] = useState(false);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	const content = [
		{
			text: "Orders management",
			route: adminOrdersRoute
		},
		{
			text: "Products management",
			route: adminProductsRoute
		},
		{
			text: "Add Brand",
			route: adminAddBrandRoute
		},
		{
			text: "Add Category",
			route: adminAddCategoryRoute
		},
		{
			text: "Add subcategory",
			route: adminAddSubcategoryRoute
		},
		{
			text: "Add Product",
			route: adminAddProductRoute
		}
	]

	return (
		<>
			{/* small screens */}
			<Button className="d-lg-none" variant="primary" onClick={handleShow}>
				Admin Menu
			</Button>
			<Offcanvas show={show} onHide={handleClose}>
				<Offcanvas.Header closeButton>
					<Offcanvas.Title>Admin Menu</Offcanvas.Title>
				</Offcanvas.Header>
				<Offcanvas.Body>
					<section className="d-flex flex-column flex-wrap  gap-3 bg-light p-3 rounded-3">
						{
							content.map((item, i) => {
								return (
									<Link to={item.route} key={i + 1} className="text-decoration-none text-dark">
										<section
											key={i + 1}
											className={`d-flex justify-content-between align-items-center gap-3 bg-white p-3 rounded-3`}
										>
											<section>{item.text}</section>
										</section>
									</Link>
								)
							})
						}
					</section>
				</Offcanvas.Body>
			</Offcanvas>

			{/* large screens */}
			<section className="d-none d-lg-flex flex-column flex-wrap  gap-3 bg-light p-3 rounded-3">
				{
					content.map((item, i) => {
						return (
							<Link to={item.route} key={i + 1} className="text-decoration-none text-dark">
								<section
									key={i + 1}
									className="d-flex justify-content-between align-items-center gap-3 bg-white p-3 rounded-3"
								>
									<section>{item.text}</section>
								</section>
							</Link>
						)
					})
				}
			</section>
		</>
	)
}
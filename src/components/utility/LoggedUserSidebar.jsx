import {Link} from "react-router-dom";
import {useState} from "react";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";

export default function LoggedUserSidebar({content,role}) {

	const [show, setShow] = useState(false);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	return (
		<>
			{/* small screens */}
			<Button className="d-lg-none" variant="primary" onClick={handleShow}>
				{role} Menu
			</Button>
			<Offcanvas show={show} onHide={handleClose}>
				<Offcanvas.Header closeButton>
					<Offcanvas.Title>{role} Menu</Offcanvas.Title>
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
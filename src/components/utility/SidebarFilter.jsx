import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";

export default function SidebarFilter() {
	const type = "checkbox";
	return (
		<Nav className="flex-column" style={{
			minWidth: "200px",
		}}>
			{/* Categories Filter */}
			<Nav.Item className="h5 mb-2">Category</Nav.Item>
			<Nav variant="pills" className="flex-column">
				<Nav.Link className="w-fit-content mb-2" eventKey={`All`}>All</Nav.Link>
				{
					Array(3).fill().map((e,i) => <Nav.Link key={"link-key-" + i + 1} className="w-fit-content mb-2" eventKey={`link-${i + 1}`}>Cat {i + 1}</Nav.Link>)
				}
				<Nav.Link className="w-fit-content mb-2" eventKey={`more`}>More</Nav.Link>
			</Nav>

			{/* Sub Categories Filter */}
			<Nav.Item className="h5 mt-3 mb-2">Sub Category</Nav.Item>
			<Form>
				<Form.Check // prettier-ignore
					type={type}
					id={`all-sub-categories-${type}`}
					label="All"
				/>
				{
					Array(5).fill().map((e,i) => {
						return (
							<Form.Check
								key={`sub-category-${i + 1}`}
								type={type}
								label={`sub category ${i + 1}`}
								id={`sub-category-${type}-${i + 1}`}
							/>
						)
					})
				}
			</Form>

			{/* Brands filter */}
			<Nav.Item className="h5 mt-3 mb-2">Brands</Nav.Item>
			<Form className="ps-2">
				<Form.Check // prettier-ignore
					type={type}
					id={`all-brands-${type}`}
					label="All"
				/>
				{
					Array(3).fill().map((e,i) => {
						return (
							<Form.Check
								key={`brand-${i + 1}`}
								type={type}
								label={`brand ${i + 1}`}
								id={`brand-${type}-${i + 1}`}
							/>
						)
					})
				}
			</Form>

			{/* Price From To Filter */}
			<Nav.Item className="h5 mt-3 mb-2">Price</Nav.Item>
			<Form className="ps-2">
				<Form.Group className="mb-3" >
					<Form.Label>From</Form.Label>
					<Form.Control type="text" placeholder="0" />
				</Form.Group>
				<Form.Group className="mb-3" >
					<Form.Label>To</Form.Label>
					<Form.Control type="text" placeholder="1000" />
				</Form.Group>
			</Form>
		</Nav>
	)
}
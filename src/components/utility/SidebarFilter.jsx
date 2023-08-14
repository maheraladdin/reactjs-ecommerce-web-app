import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";
import useProductSidebarFilter from "../../Hooks/products/useProductSidebarFilter";
import Button from "react-bootstrap/Button";
import {Spinner} from "react-bootstrap";

export default function SidebarFilter() {
	const {
		type,
		categories,
		subcategories,
		brands,
		handleSeeMoreCategories,
		handleSeeMoreSubcategories,
		handleSeeMoreBrands,
		loadingCategories,
		loadingSubcategories,
		loadingBrands
	} = useProductSidebarFilter()
	return (
		<Nav className="flex-column" style={{
			minWidth: "200px",
		}}>
			{/* Categories Filter */}
			<Nav.Item className="h5 mt-3 mb-2">Category</Nav.Item>
			<Form>
				<Form.Check // prettier-ignore
					type={type}
					id={`all-categories-${type}`}
					label="All"
				/>
				{
					categories.map((category,index) => {
						return (
							<Form.Check
								key={`category-${index + 1}`}
								type={type}
								label={category.name}
								id={`category-${type}-${index + 1}`}
							/>
						)
					})
				}
				<Button onClick={handleSeeMoreCategories} variant="link" className="p-0">See More</Button>
				{loadingCategories && <Spinner size={"sm"} className="mt-2" animation="border" variant="primary" />}
			</Form>

			{/* Sub Categories Filter */}
			<Nav.Item className="h5 mt-3 mb-2">Sub Category</Nav.Item>
			<Form>
				<Form.Check // prettier-ignore
					type={type}
					id={`all-sub-categories-${type}`}
					label="All"
				/>
				{
					subcategories.map((subcategory, index) => {
						return (
							<Form.Check
								key={`sub-category-${index + 1}`}
								type={type}
								label={subcategory.name}
								id={`sub-category-${type}-${index + 1}`}
							/>
						)
					})
				}
				<Button onClick={handleSeeMoreSubcategories} variant="link" className="p-0">See More</Button>
				{loadingSubcategories && <Spinner size={"sm"} className="mt-2" animation="border" variant="primary" />}
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
					brands.map((brand,index) => {
						return (
							<Form.Check
								key={`brand-${index + 1}`}
								type={type}
								label={brand.name}
								id={`brand-${type}-${index + 1}`}
							/>
						)
					})
				}
				<Button onClick={handleSeeMoreBrands} variant="link" className="p-0">See More</Button>
				{loadingBrands && <Spinner size={"sm"} className="mt-2" animation="border" variant="primary" />}
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
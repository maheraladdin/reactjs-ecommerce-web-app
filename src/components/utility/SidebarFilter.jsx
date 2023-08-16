import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";
import useProductSidebarFilter from "../../Hooks/products/useProductSidebarFilter";
import Button from "react-bootstrap/Button";
import {Spinner} from "react-bootstrap";

export default function SidebarFilter() {

	const {
		type,
		categories,
		brands,
		handleSeeMoreCategories,
		handleSeeMoreBrands,
		loadingCategories,
		loadingBrands,
		handlePriceGreaterThan,
		handlePriceLessThan,
		onClickPriceFilter,
		selectAllCategories,
		selectAllBrands,
		onCategoryChecked,
		onBrandChecked
	} = useProductSidebarFilter();

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
					checked={selectAllCategories}
					role={"button"}
					onChange={onCategoryChecked}
					value={"all"}
				/>
				{
					categories.map((category,index) => {
						return (
							<Form.Check
								key={`category-${index + 1}`}
								type={type}
								label={category.name}
								id={`category-${type}-${index + 1}`}
								value={category._id}
								role={"button"}
								onChange={onCategoryChecked}
							/>
						)
					})
				}
				<Button onClick={handleSeeMoreCategories} variant="link" className="p-0">See More</Button>
				{loadingCategories && <Spinner size={"sm"} className="mt-2" animation="border" variant="primary" />}
			</Form>

			{/* Brands filter */}
			<Nav.Item className="h5 mt-3 mb-2">Brands</Nav.Item>
			<Form className="ps-2">
				<Form.Check // prettier-ignore
					type={type}
					id={`all-brands-${type}`}
					label="All"
					checked={selectAllBrands}
					role={"button"}
					onChange={onBrandChecked}
					value={"all"}
				/>
				{
					brands.map((brand,index) => {
						return (
							<Form.Check
								key={`brand-${index + 1}`}
								type={type}
								label={brand.name}
								id={`brand-${type}-${index + 1}`}
								value={brand._id}
								role={"button"}
								onChange={onBrandChecked}
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
					<Form.Control onChange={handlePriceGreaterThan} type="number" placeholder="0" />
				</Form.Group>
				<Form.Group className="mb-3" >
					<Form.Label>To</Form.Label>
					<Form.Control onChange={handlePriceLessThan} type="number" placeholder="1000" />
				</Form.Group>
				<section className={"d-flex flex-row-reverse mb-5"}>
					<Button onClick={onClickPriceFilter} variant="primary">Apply</Button>
				</section>
			</Form>
		</Nav>
	)
}
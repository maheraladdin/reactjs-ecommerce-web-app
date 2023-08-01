import UploadImage from "./UploadImage";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import {MultiSelect} from "react-multi-select-component";
import useAddProduct from "../../Hooks/products/useAddProduct";
import ColorPicker from "react-pick-color";


export default function AdminAddProduct() {

	const {
		loading,
		coverImage,
		setCoverImage,
		uploadCoverImage,
		setUploadCoverImage,
		images,
		setImages,
		uploadImages,
		setUploadImages,
		title,
		handleTitle,
		description,
		handleDescription,
		quantity,
		handleQuantity,
		price,
		handlePrice,
		discountedPrice,
		handleDiscountedPrice,
		category,
		categories,
		handleCategory,
		selectedSubCategories,
		setSelectedSubCategories,
		subcategories,
		disabled,
		brand,
		brands,
		handleBrand,
		colors,
		handleSelectedColors,
		pickedColor,
		handlePickedColor,
	} = useAddProduct();


	return (
		<>
			<Form className="my-3 d-flex flex-column gap-3">
				<Form.Group>
					<Form.Label className={"h4"}>Product cover image</Form.Label>
					<UploadImage id={"coverImage"} images={coverImage} setImages={setCoverImage} setUploadImages={setUploadCoverImage} uploadImages={uploadCoverImage} />
				</Form.Group>
				<Form.Group>
					<Form.Label className={"h4"}>Product images</Form.Label>
					<UploadImage multiple={true} images={images} setImages={setImages} setUploadImages={setUploadImages} uploadImages={uploadImages} />
				</Form.Group>
				<Form.Group controlId="productName">
					<Form.Label>Product Name</Form.Label>
					<Form.Control value={title} onInput={handleTitle} type="text" placeholder="Product Name" />
				</Form.Group>
				<Form.Group controlId="productDescription">
					<Form.Label>Product Description</Form.Label>
					<Form.Control value={description} onInput={handleDescription} className="resize-none" as="textarea" rows={3} placeholder="Product Description" />
				</Form.Group>
				<Form.Group controlId="productQuantity">
					<Form.Label>Product Quantity</Form.Label>
					<Form.Control value={quantity} onChange={handleQuantity} type={"number"} placeholder="Product Quantity" />
				</Form.Group>
				<Form.Group controlId="productPrice">
					<Form.Label>Product Price</Form.Label>
					<Form.Control value={price} onChange={handlePrice} type={"number"} placeholder="Product Price" />
				</Form.Group>
				<Form.Group controlId="productDiscountedPrice">
					<Form.Label>Product Discounted Price</Form.Label>
					<Form.Control value={discountedPrice} onChange={handleDiscountedPrice} type={"number"} placeholder="Product Discounted Price" />
				</Form.Group>
				<Form.Group controlId="Category">
					<Form.Label>Category</Form.Label>
					<Form.Select value={category} onChange={handleCategory} aria-label="Category">
						<option disabled value={""}>Select Category</option>
						{
							categories.map((category, index) => (
								<option key={"category-key-" + index} value={category._id}>{category.name}</option>
							))
						}
					</Form.Select>
				</Form.Group>

				<Form.Group controlId="Subcategory">
					<Form.Label>Subcategory</Form.Label>
					<MultiSelect
						disabled={disabled}
						options={subcategories}
						value={selectedSubCategories}
						onChange={setSelectedSubCategories}
						labelledBy="Subcategory"
					/>
				</Form.Group>

				<Form.Group controlId="Brand">
					<Form.Label>Brand</Form.Label>
					<Form.Select value={brand} onChange={handleBrand} aria-label="Brand">
						<option value={""}>No Brand</option>
						{
							brands.map((brand, index) => (
								<option key={"brand-key-" + index} value={brand._id}>{brand.name}</option>
							))
						}
					</Form.Select>
				</Form.Group>

				<Form.Group>
					<Form.Label>Colors</Form.Label>
					<section className="d-flex gap-1">
					{
						colors.map((color, index) => (
							<>
								<Form.Check className="d-none" id={"color-" + index} key={"color-check-key-" + index} onChange={handleSelectedColors} value={color} type="checkbox" />
								<Form.Label
									key={"color-label-key-" + index}
									htmlFor={"color-" + index}
									role="button"
									className="rounded-circle"
									style={{
										width: "35px",
										height: "35px",
										backgroundColor: color,
									}} />
							</>
						))
					}
						<section
							role="button"
							className="bg-light rounded-circle d-flex justify-content-center align-items-center border border-1 border-dark"
							style={{
								width: "35px",
								height: "35px",
							}}
						>
							<section className="fa-solid fa-plus"></section>
							<ColorPicker color={pickedColor} onChange={handlePickedColor} />
						</section>
					</section>
				</Form.Group>
			</Form>
			<section className="d-flex justify-content-end">
				<Button variant="outline-success"> Add Product </Button>
			</section>
		</>
	)
}
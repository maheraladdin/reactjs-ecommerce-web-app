import UploadImage from "../../utility/UploadImage";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import {MultiSelect} from "react-multi-select-component";
import ColorPicker from "react-pick-color";
import {Spinner} from "react-bootstrap";
import {Fragment} from "react";
import {UploadImages} from "../../utility/UploadImages";


export default function AdminProductFormTemplate({
		loading,
		uploadCoverImage,
		setUploadCoverImage,
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
		selectedColors,
		handleSelectedColors,
		pickedColor,
		handlePickedColor,
		displayColorPicker,
		handleDisplayColorPicker,
		handleSetColors,
		handleSubmitProduct,
		SubmitButtonTitle,
		validated,
		image,
		images,
		setImage,
		setImages,
	}) {
	return (
		<>
			<Form validated={validated} className="my-3 d-flex flex-column gap-3">
				<Form.Group>
					<Form.Label className={"h4"}>Product cover image</Form.Label>
					<UploadImage image={image} setImage={setImage} setUploadImages={setUploadCoverImage} uploadImages={uploadCoverImage} />
				</Form.Group>
				<Form.Group>
					<Form.Label className={"h4"}>Product images</Form.Label>
					<UploadImages images={images} setImages={setImages} setUploadImages={setUploadImages}/>
				</Form.Group>
				<Form.Group controlId="productName">
					<Form.Label>Product Name</Form.Label>
					<Form.Control required value={title} onInput={handleTitle} type="text" placeholder="Product Name" />
				</Form.Group>
				<Form.Group controlId="productDescription">
					<Form.Label>Product Description</Form.Label>
					<Form.Control required value={description} onInput={handleDescription} className="resize-none" as="textarea" rows={3} placeholder="Product Description" />
				</Form.Group>
				<Form.Group controlId="productQuantity">
					<Form.Label>Product Quantity</Form.Label>
					<Form.Control required value={quantity} onChange={handleQuantity} type={"number"} placeholder="Product Quantity" />
				</Form.Group>
				<Form.Group controlId="productPrice">
					<Form.Label>Product Price</Form.Label>
					<Form.Control required value={price} onChange={handlePrice} type={"number"} placeholder="Product Price" />
				</Form.Group>
				<Form.Group controlId="productDiscountedPrice">
					<Form.Label>Product Discounted Price</Form.Label>
					<Form.Control value={discountedPrice} onChange={handleDiscountedPrice} type={"number"} placeholder="Product Discounted Price" />
				</Form.Group>
				<Form.Group controlId="Category">
					<Form.Label>Category</Form.Label>
					<Form.Select required value={category} onChange={handleCategory} aria-label="Category">
						<option key={"category-key-0"} disabled value={""}>Select Category</option>
						{
							categories.map((category, index) => (
								<option key={"category-key-" + index + 1} value={category._id}>{category.name}</option>
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
						<option key={0} value={""}>No Brand</option>
						{
							brands.map((brand, index) => (
								<option key={"brand-key-" + index + 1} value={brand._id}>{brand.name}</option>
							))
						}
					</Form.Select>
				</Form.Group>

				<Form.Group>
					<Form.Label>Colors</Form.Label>
					<section className="d-flex gap-1 flex-wrap">
						{
							colors.map((color, index) => (
								<Fragment key={"color-key-" + index + 1}>
									<Form.Check className="d-none" id={"color-" + index} key={"color-check-key-" + index} onChange={handleSelectedColors} value={color} type="checkbox" />
									<Form.Label
										key={"color-label-key-" + index}
										htmlFor={"color-" + index}
										role="button"
										className={`rounded-circle text-center`}
										style={{
											width: "35px",
											height: "35px",
											backgroundColor: color,
											lineHeight: "35px",
										}}
										onClick={handleSelectedColors}
									>
										{selectedColors.includes(color) ? <section className="fa-solid fa-check text-light-emphasis"></section> : ""}
									</Form.Label>
								</Fragment>
							))
						}
						<section
							role="button"
							className="bg-light rounded-circle d-flex justify-content-center align-items-center border border-1 border-dark"
							style={{
								width: "35px",
								height: "35px",
							}}
							onClick={handleDisplayColorPicker}
						>
							<section className="fa-solid fa-plus"></section>
						</section>
						<ColorPicker className={displayColorPicker ? ""  : "d-none"} color={pickedColor} onChange={handlePickedColor} />
						<section
							role="button"
							className={`bg-success rounded-circle d-flex justify-content-center align-items-center border border-1 border-light ${displayColorPicker ? ""  : "d-none"}`}
							style={{
								width: "35px",
								height: "35px",
							}}
							onClick={handleSetColors}
						>
							<section className="fa-solid fa-check text-light"></section>
						</section>
					</section>
				</Form.Group>
			</Form>
			<section className="d-flex justify-content-end">
				<Button onClick={handleSubmitProduct} variant="outline-success">
					{loading ? <Spinner className={"me-2"} size={"sm"} animation="border" variant="success" /> : ""}
					{SubmitButtonTitle}
				</Button>
			</section>
		</>
	)
}
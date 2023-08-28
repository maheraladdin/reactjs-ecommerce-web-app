import useAddProduct from "../../../Hooks/products/useAddProduct";
import AdminProductFormTemplate from "./AdminProductFormTemplate";


export default function AdminAddProduct() {

	const {
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
		handleAddProduct,
		validated,
		image,
		images,
		setImage,
		setImages,
	} = useAddProduct();


	return (
		<AdminProductFormTemplate
			loading={loading}
			uploadCoverImage={uploadCoverImage}
			setUploadCoverImage={setUploadCoverImage}
			setUploadImages={setUploadImages}
			title={title}
			handleTitle={handleTitle}
			description={description}
			handleDescription={handleDescription}
			quantity={quantity}
			handleQuantity={handleQuantity}
			price={price}
			handlePrice={handlePrice}
			discountedPrice={discountedPrice}
			handleDiscountedPrice={handleDiscountedPrice}
			category={category}
			categories={categories}
			handleCategory={handleCategory}
			selectedSubCategories={selectedSubCategories}
			setSelectedSubCategories={setSelectedSubCategories}
			subcategories={subcategories}
			disabled={disabled}
			brand={brand}
			brands={brands}
			handleBrand={handleBrand}
			colors={colors}
			selectedColors={selectedColors}
			handleSelectedColors={handleSelectedColors}
			pickedColor={pickedColor}
			handlePickedColor={handlePickedColor}
			displayColorPicker={displayColorPicker}
			handleDisplayColorPicker={handleDisplayColorPicker}
			handleSetColors={handleSetColors}
			handleSubmitProduct={handleAddProduct}
			SubmitButtonTitle={"Add Product"}
			validated={validated}
			image={image}
			images={images}
			setImage={setImage}
			setImages={setImages}
		/>)
}
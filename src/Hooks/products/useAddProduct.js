import {useState, useEffect} from "react";
import {useSelector, useDispatch} from "react-redux";
import {getCategories} from "../../Redux/Actions/categoryActions";
import {getBrands} from "../../Redux/Actions/BrandActions";
import {getSubcategoriesForSpecificCategory} from "../../Redux/Actions/subcategoryActions";
import {createProduct} from "../../Redux/Actions/productActions";
import useNotify from "../useNotify";
import AddImage from "../../assets/images/add-image.png";

export default function useAddProduct() {

    const dispatch = useDispatch();

    // get the token from redux store
    const token = useSelector(state => state.userReducer.token);

    // states for cover image
    const [uploadCoverImage, setUploadCoverImage] = useState([]);

    const [image, setImage] = useState([AddImage]);

    // states for product images
    const [uploadImages, setUploadImages] = useState([]);

    const [images, setImages] = useState([]);


    // states for product title
    const [title, setTitle] = useState("");

    /**
     * @desc    this function handle input title
     * @param   e
     * @return  void
     */
    const handleTitle = (e) => {
        setTitle(e.target.value);
    }

    // states for product description
    const [description, setDescription] = useState("");

    /**
     * @desc    this function handle input Description
     * @param   e
     * @return  void
     */
    const handleDescription = (e) => {
        setDescription(e.target.value);
    }

    // states for product quantity
    const [quantity, setQuantity] = useState(0);

    /**
     * @desc    this function handle input Quantity
     * @param   e
     * @return  void
     */
    const handleQuantity = (e) => {
        setQuantity(e.target.value);
    }

    // states for product price
    const [price, setPrice] = useState(0);

    /**
     * @desc    this function handle input price
     * @param   e
     * @return  void
     */
    const handlePrice = (e) => {
        setPrice(e.target.value);
    }

    // states for product discounted price
    const [discountedPrice, setDiscountedPrice] = useState(0);

    /**
     * @desc    this function handle input discounted price
     * @param   e
     * @return  void
     */
    const handleDiscountedPrice = (e) => {
        setDiscountedPrice(e.target.value);
    }

    // states for product category
    const [category, setCategory] = useState("");

    // get categories from redux store
    const categories = useSelector(state => state.categoryReducer.categories);


    /**
     * @desc    this function handle input CategoryId
     * @param   e
     * @return  void
     */
    const handleCategory = (e) => {
        setCategory(e.target.value);
    }

    // states for multiselect subcategories
    const [selectedSubCategories, setSelectedSubCategories] = useState([]);
    const [disabled, setDisabled] = useState(true);

    // get subcategories from redux store ,then return value as subcategoryId and label as subcategory name
    const subcategories = useSelector(state => state.subcategoryReducer.subcategories).map(subcategory => {
        return {
            value: subcategory._id,
            label: subcategory.name,
        }
    })

    // states for product brand
    const [brand, setBrand] = useState("");

    // get brands from redux store
    const brands = useSelector(state => state.brandReducer.brands);

    /**
     * @desc    this function handle input brand
     * @param   e
     * @return  void
     */
    const handleBrand = (e) => {
        setBrand(e.target.value);
    }

    // states for product colors
    const [colors, setColors] = useState([
        "red",
        "green",
        "blue",
    ]);

    const [selectedColors, setSelectedColors] = useState([]);
    
    const [pickedColor, setPickedColor] = useState("red");

    const [displayColorPicker, setDisplayColorPicker] = useState(false);

    /**
     * @desc    this function handle input colors
     */
    const handleSetColors = () => {
        setColors([...new Set([...colors, pickedColor])]);
    }

    /**
     * @desc    this function handle input selected colors
     * @param   e
     * @return  void
     */
    const handleSelectedColors = (e) => {
        if(selectedColors.includes(e.target.value)) {
            setSelectedColors(selectedColors.filter(color => color !== e.target.value));
            return;
        }
        setSelectedColors([...new Set([...selectedColors, e.target.value])]);
    }

    /**
     * @desc    this function handle input picked colors
     * @param   {Object} color - picked color
     * @return  void
     */
    const handlePickedColor = (color) => {
        setPickedColor(color.hex);
    }

    /**
     * @desc    this function handle displayed colors
     * @return  void
     */
    const handleDisplayColorPicker = () => {
        setDisplayColorPicker(!displayColorPicker);
    }

    // loading state
    const [loading, setLoading] = useState(false);

    const createProductStatus = useSelector(state => state.productReducer.status);

    /**
     * @desc    this function handle add product
     * @param   e
     * @return  void
     */
    const handleAddProduct = async (e) => {

        // prevent the browser from refreshing
        e.preventDefault();

        // check if the form is valid
        setValidated(true);

        // check if the required fields are filled
        if(typeof uploadCoverImage[0] === "string") return notify("Please add cover image", "error");
        if(!uploadImages.length) return notify("Please add product images", "error");
        if(!title) return notify("Please enter product name", "error");
        if(!description) return notify("Please enter product description", "error");
        if(!quantity) return notify("Please enter product quantity", "error");
        if(!price) return notify("Please enter product price", "error");
        if(Number(price) < Number(discountedPrice)) return notify("Discounted price must be less than product price", "error");
        if(!category) return notify("Please select product category", "error");

        setLoading(true);
        const formData = new FormData();
        await (async () => {
            formData.append("imageCover", uploadCoverImage[0]);
            for(let i = 0; i < uploadImages.length; i++) {
                formData.append("images", uploadImages[i]);
            }
            formData.append("title", title);
            formData.append("description", description);
            formData.append("quantity", quantity);
            formData.append("price", price);
            formData.append("discountedPrice", discountedPrice);
            formData.append("category", category);
            if (subcategories.length > 0)
                selectedSubCategories.forEach(subcategory => {
                    formData.append("subCategories[]", subcategory.value);
                })
            if (brand) formData.append("brand", brand);
            selectedColors.forEach(color => {
                if (colors.includes(color)) formData.append("colors", color);
            })
        })();

        await dispatch(createProduct({
            body: formData,
            config: {
                headers: {
                    "Content-Type": "multipart/form-data",
                    "Authorization": `Bearer ${token}`
                }
            }
        }));
        if(createProductStatus === 201) notify("Product created successfully", "success");
        setLoading(false);
    }

    const error = useSelector(state => state.errorReducer.error);

    const [errorMessage, setErrorMessage] = useState("");
    const notify = useNotify();

    // state of form validation
    const [validated, setValidated] = useState(false);

    useEffect(() => {
        dispatch(getCategories(1,Number.MAX_SAFE_INTEGER,"name"));
        dispatch(getBrands(1,Number.MAX_SAFE_INTEGER,"name"));
        // eslint-disable-next-line
    }, []);

    useEffect(() => {
        if (category) {
            setDisabled(false);
            dispatch(getSubcategoriesForSpecificCategory(category, 1, Number.MAX_SAFE_INTEGER, "name"));
        }
        // eslint-disable-next-line
    }, [category]);

    useEffect(() => {
        if(!loading && createProductStatus === 201) {
            setImages([]);
            setUploadImages([]);
            setImage([AddImage]);
            setUploadCoverImage([]);
            setValidated(false);
            setTitle("");
            setDescription("");
            setQuantity(0);
            setPrice(0);
            setDiscountedPrice(0);
            setCategory("");
            setSelectedSubCategories([]);
            setBrand("");
            setSelectedColors([]);
        }
        // eslint-disable-next-line
    },[loading]);

    useEffect(() => {
        if (error) {
            setErrorMessage(error.message);
        }
        // eslint-disable-next-line
    }, [createProductStatus]);


    useEffect(() => {
        if(errorMessage)
            notify(errorMessage, "error", {
                onClose: () => setErrorMessage(""), // reset the error message
            });
        // eslint-disable-next-line
    }, [errorMessage]);




    return {
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
        setImage,
        images,
        setImages
    }

}
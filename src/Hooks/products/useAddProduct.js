import {useState, useEffect} from "react";
import AddImage from "../../assets/images/add-image.png";
import {useSelector, useDispatch} from "react-redux";
import {getCategories} from "../../Redux/Actions/categoryActions";
import {getBrands} from "../../Redux/Actions/BrandActions";
import {getSubcategoriesForSpecificCategory} from "../../Redux/Actions/subcategoryActions";

export default function useAddProduct() {

    // loading state
    const [loading, setLoading] = useState(false);

    const dispatch = useDispatch();

    // states for cover image
    const [coverImage, setCoverImage] = useState([AddImage]);
    const [uploadCoverImage, setUploadCoverImage] = useState([]);

    // states for product images
    const [images, setImages] = useState([AddImage]);
    const [uploadImages, setUploadImages] = useState([]);

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
     * @desc    this function handle input selected colors
     * @param   e
     * @return  void
     */
    const handleSelectedColors = (e) => {
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
        console.log(selectedColors);
        // eslint-disable-next-line
    }, [selectedColors]);


    useEffect(() => {
        setColors([...new Set([...colors, pickedColor])]);
        // eslint-disable-next-line
    },[pickedColor]);





    return {
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
        selectedColors,
        handleSelectedColors,
        pickedColor,
        handlePickedColor,
        displayColorPicker,
        handleDisplayColorPicker
    }

}
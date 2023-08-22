import {combineReducers} from "redux";
import categoryReducer from "./categoryReducer";
import errorReducer from "./errorReducer";
import brandReducer from "./brandReducer";
import subcategoryReducer from "./SubcategoryReducer";
import productReducer from "./productReducer";
import reviewReducer from "./reviewReducer";
import filterReducer from "./FilterReducer";
import userReducer from "./userReducer";
import wishlistReducer from "./wishlistReducer";
export default combineReducers({
    categoryReducer,
    errorReducer,
    brandReducer,
    subcategoryReducer,
    productReducer,
    reviewReducer,
    filterReducer,
    userReducer,
    wishlistReducer,
});
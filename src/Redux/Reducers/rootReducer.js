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
import couponReducer from "./couponReducer";
import addressReducer from "./addressReducer";
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
    couponReducer,
    addressReducer,
});
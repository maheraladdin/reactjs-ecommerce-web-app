import {combineReducers} from "redux";
import categoryReducer from "./categoryReducer";
import errorReducer from "./errorReducer";
import brandReducer from "./brandReducer";
import subcategoryReducer from "./SubcategoryReducer";
import productReducer from "./productReducer";
import reviewReducer from "./reviewReducer";
export default combineReducers({
    categoryReducer,
    errorReducer,
    brandReducer,
    subcategoryReducer,
    productReducer,
    reviewReducer,
});
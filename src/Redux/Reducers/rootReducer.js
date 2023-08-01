import {combineReducers} from "redux";
import categoryReducer from "./categoryReducer";
import errorReducer from "./errorReducer";
import brandReducer from "./brandReducer";
import subcategoryReducer from "./SubcategoryReducer";
import productReducer from "./productReducer";
export default combineReducers({
    categoryReducer,
    errorReducer,
    brandReducer,
    subcategoryReducer,
    productReducer,
});
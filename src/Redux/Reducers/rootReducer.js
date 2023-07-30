import {combineReducers} from "redux";
import categoryReducer from "./categoryReducer";
import errorReducer from "./errorReducer";
import brandReducer from "./brandReducer";
export default combineReducers({
    categoryReducer,
    errorReducer,
    brandReducer,
});
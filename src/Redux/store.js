import {createStore, applyMiddleware} from "redux";
import rootReducer from "./Reducers/rootReducer";
import middleware from "redux-thunk";
import {composeWithDevTools} from "@redux-devtools/extension";

const InitialState = {};

const ReduxDevTools = composeWithDevTools(applyMiddleware(middleware));

const store = createStore(rootReducer, InitialState, ReduxDevTools);

export default store;
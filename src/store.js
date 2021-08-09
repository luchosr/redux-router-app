import { createStoreHook, combineReducers } from "react-redux";
import homePageReducer from "./containers/HomePage/reducers";

const reducers = combineReducers({ homePageReducer });

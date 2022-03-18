import { combineReducers } from "redux";
import bookReducer from "./bookReducer";
import dataReducer from "./dataReducer";
import itemReducer from "./itemReducer";

const reducer = combineReducers({ bookReducer, dataReducer, itemReducer });

export default reducer;

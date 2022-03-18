import { createStore } from "redux";
import reducer from "./reducer";
// import { composeWithDevTools } from "redux-devtools-extension";

// const store = createStore(reducer, composeWithDevTools());
const store = createStore(reducer);

export default store;

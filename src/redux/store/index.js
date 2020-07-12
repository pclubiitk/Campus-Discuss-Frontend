import { createStore } from "redux";
import { handleAction } from "../reducers";

const store = createStore(
    handleAction,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;

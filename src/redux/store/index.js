import { createStore } from "redux";
import { handleAction } from "../reducers";

const store = createStore(handleAction);

export default store;

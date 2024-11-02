import { createStore, applyMiddleware } from "redux";
import { thunk } from "redux-thunk";
import rootReducer from "../reducers/characterReducer";

export default () => {
  const store = createStore(rootReducer, applyMiddleware(thunk));
  return store;
};

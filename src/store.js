import thunk from "redux-thunk";

import {
  postListReducer,

} from "./_reducers/postReducer";
import { applyMiddleware, combineReducers, compose, createStore } from "redux";


const reducer = combineReducers({
  postList: postListReducer,
});
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducer,
  composeEnhancer(applyMiddleware(thunk))
);

export default store;

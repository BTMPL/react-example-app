import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk"

import videoReducer from "../reducers/videos";

export default createStore(combineReducers({
  videos: videoReducer
}), applyMiddleware(thunk));
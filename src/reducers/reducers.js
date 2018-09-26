import { combineReducers } from "redux";

import animationReducer from "./animationReducer.js";

export default combineReducers({animation: animationReducer});
import { combineReducers } from "redux";

import animationReducer from "./animationReducer.js";
import overlayReducer from './overlayReducer.js';

export default combineReducers({animation: animationReducer, overlay: overlayReducer});
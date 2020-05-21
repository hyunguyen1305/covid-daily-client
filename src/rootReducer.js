import { combineReducers } from "redux";
import homeReducer from "./app/routes/home/duck/";

const rootReducer = combineReducers({
  home: homeReducer,
});

export default rootReducer;

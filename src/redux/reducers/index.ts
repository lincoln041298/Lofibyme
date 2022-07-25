import { combineReducers } from "redux";
import ModReducer from "./ModReducer";
import rainReducer from "./RainReducer";

const rootReducer = combineReducers({
  modeState: ModReducer,
  rainState: rainReducer,
});

export default rootReducer;

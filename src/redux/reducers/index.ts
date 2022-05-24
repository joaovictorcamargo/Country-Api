import { combineReducers } from "redux";

import countryReducer from "./CoutryReducer";

const rootReducer = () =>
  combineReducers({
    countryReducer,
  });

export default rootReducer;

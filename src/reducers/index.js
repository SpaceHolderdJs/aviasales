import { combineReducers } from "redux";
import idReducer from "./idReducer";
import ticketsReducer from "./ticketsReducer";
import transfersReducer from "./transfersReducer";
import prefReducer from "./prefReducer";

const allReducers = combineReducers({
  id: idReducer,
  tickets: ticketsReducer,
  transfer: transfersReducer,
  pref: prefReducer,
});

export default allReducers;

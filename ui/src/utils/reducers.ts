import { combineReducers } from "redux";

const appState = {
  version: "",
};

const appReducer = (state = appState, action: any) => {
  if (action.type === "SET_VERSION") {
    return { ...state, version: action.payload };
  }
  return state;
};

export default combineReducers({
  app: appReducer,
});

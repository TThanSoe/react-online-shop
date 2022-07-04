import { combineReducers } from "redux";

// import { userReducer } from "./user/user.reducer";
import { navigationReducer } from "./navigation/navigation.reducer";

export const rootReducer = combineReducers({
  navigation: navigationReducer,
});

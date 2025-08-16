import { createStore , combineReducers } from "redux";
import { counterReducer } from "./reducers/counterReducer"; // Adjust the path as necessary
import { userReducer } from "./reducers/userReducer"; // Adjust the path as necessary

const rootReducer = combineReducers({
  counter: counterReducer,
  user:userReducer
});

// Create store without any middleware
export const store = createStore(rootReducer);


// Debug line
console.log('Initial store state:', store.getState());
window.store = store;
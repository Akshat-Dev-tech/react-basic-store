import { createStore , combineReducers , applyMiddleware } from "redux";
import { counterReducer } from "./reducers/counterReducer"; // Adjust the path as necessary
import { userReducer } from "./reducers/userReducer"; // Adjust the path as necessary
import { productReducer } from "./reducers/productReducer"; // Adjust the path as necessary
import {thunk} from "redux-thunk"; // Import thunk middleware

const rootReducer = combineReducers({
  counter: counterReducer,
  user:userReducer,
  product:productReducer 
});

// Create store without any middleware
export const store = createStore(rootReducer, applyMiddleware(thunk));


// Debug line
console.log('Initial store state:', store.getState());
window.store = store;
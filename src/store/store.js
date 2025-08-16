import { createStore } from "redux";
import { counterReducer } from "./reducers/counterReducer"; // Adjust the path as necessary

// Create store without any middleware
export const store = createStore(counterReducer);


// Debug line
console.log('Initial store state:', store.getState());
window.store = store;
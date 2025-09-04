import { createStore , combineReducers , applyMiddleware } from "redux";
import { counterReducer } from "./reducers/counterReducer"; // Adjust the path as necessary
import { userReducer } from "./reducers/userReducer"; // Adjust the path as necessary
import { productReducer } from "./reducers/productReducer"; // Adjust the path as necessary
import {thunk} from "redux-thunk"; // Import thunk middleware
import createSagaMiddleware from "redux-saga";
import rootSaga from "./sagas/rootSaga";
import { productSagaReducer } from "./reducers/productSagaReducer";

const rootReducer = combineReducers({
  counter: counterReducer,
  user:userReducer,
  product:productReducer,
  sagaproduct:productSagaReducer
});

// Create saga middleware
const sagaMiddleware = createSagaMiddleware();

// Create store without any middleware
export const store = createStore(rootReducer, applyMiddleware(thunk,sagaMiddleware));

sagaMiddleware.run(rootSaga)

// Debug line
console.log('Initial store state:', store.getState());
window.store = store;
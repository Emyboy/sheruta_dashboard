import { applyMiddleware, createStore } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import rootReducer from "./reducers/root.reducer";

const middleware = [logger, thunk]

const store = createStore(rootReducer, applyMiddleware(...middleware))

export default store;
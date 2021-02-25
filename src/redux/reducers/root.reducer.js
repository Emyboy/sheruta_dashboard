import { combineReducers } from "redux";
import authReducer from "./auth.reducer";
import viewReducer from "./view.reducer";


const rootReducer = combineReducers({
    view: viewReducer,
    auth: authReducer
})

export default rootReducer;
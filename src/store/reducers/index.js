import counterReducer from "./counter.reducer";
import authReducer from "./auth.reducer";
import { combineReducers } from "redux";

const allReducers = combineReducers({
    counter : counterReducer,
    auth: authReducer
});

export default allReducers;
import {createStore, combineReducers} from "redux";
import tastReducer from "./reducer/taskReducer";

const store = createStore(combineReducers({
    task: tastReducer,
}))

export default store
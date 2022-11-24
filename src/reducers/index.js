// import all the reducers here
// import courseReducer from "./courses";
import userReducer from "./user";
import {combineReducers} from 'redux';

const allReducer = combineReducers({
    users: userReducer,
    // isLogged: loggedReducer
});

export default  allReducer;
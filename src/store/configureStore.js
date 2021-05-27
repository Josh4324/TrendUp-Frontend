import {createStore, combineReducers} from 'redux';
import loginReducer from "../reducers/loginReducer";
//import filterReducer from "../reducers/filters";


export default () => {
    const store = createStore(combineReducers({
        login: loginReducer,
        //filters: filterReducer
    }));
    return store;
}


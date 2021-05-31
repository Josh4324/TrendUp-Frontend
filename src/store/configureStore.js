import {createStore, combineReducers} from 'redux';
import loginReducer from "../reducers/loginReducer";
import userReducer from "../reducers/userReducer";


export default () => {
    const store = createStore(combineReducers({
        auth: loginReducer,
        user: userReducer
    }));
    return store;
}


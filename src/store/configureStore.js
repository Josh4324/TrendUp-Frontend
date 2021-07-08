import {createStore, combineReducers} from 'redux';
import loginReducer from "../reducers/loginReducer";
import userReducer from "../reducers/userReducer";
import emailReducer from '../reducers/emailReducer';


export default () => {
    const store = createStore(combineReducers({
        auth: loginReducer,
        user: userReducer,
        email: emailReducer
    }));
    return store;
}


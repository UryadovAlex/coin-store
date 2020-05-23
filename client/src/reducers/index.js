import {combineReducers} from "redux";
import { reducer as formReducer } from 'redux-form';
import userReducer from "./userReducer";
import userLoginReducer from "./userLoginReducer";
import coinReducer from "./coinReducer";
import cartReducer from "./cartReducer";
import coinFilterReducer from "./coinFilterReducer";

export default combineReducers({
    form: formReducer,
    users: userReducer,
    coins: coinReducer,
    cart: cartReducer,
    filterData: coinFilterReducer,
    loggedUser: userLoginReducer
});
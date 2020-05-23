import { LOGIN_USER, LOGOUT_USER } from '../actions/users/types';

const initialState = {
    id: localStorage.getItem("id"),
    token: localStorage.getItem("token"),
    name: localStorage.getItem("name"),
    isAdmin: localStorage.getItem("isAdmin")
}

export default (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_USER:
            return action.payload;
        case LOGOUT_USER:
            return {};
        default:
            return state;
    }
}
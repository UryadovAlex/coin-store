import {ADD_TO_CART, DELETE_FROM_CART, FETCH_FROM_CART, UPDATE_CART} from "../actions/cart/types";
import _ from "lodash";

export default (state = {}, action) => {
    switch (action.type) {
        case FETCH_FROM_CART:
            return {...state, ..._.mapKeys(action.payload, 'coinId')};
        case ADD_TO_CART:
            return {...state, [action.payload.id]: action.payload};
        case UPDATE_CART:
            const newItem = {...state[action.payload.coinId], qty: action.payload.qty};
            return {...state, [action.payload.coinId]: newItem};
        case DELETE_FROM_CART:
            return _.omit(state, action.payload);
        default:
            return state;
    }
}
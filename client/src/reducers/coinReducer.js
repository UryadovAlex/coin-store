import _ from 'lodash';
import {
    FETCH_COIN,
    FETCH_COINS,
    CREATE_COIN,
    DELETE_COIN,
    UPDATE_COIN, FETCH_FILTERED_COINS
} from '../actions/coins/types';

export default (state = {}, action) => {
    switch (action.type) {
        case FETCH_COIN:
            return {...state, [action.payload.id]: action.payload};
        case CREATE_COIN:
            return {...state, [action.payload.id]: action.payload};
        case UPDATE_COIN:
            return {...state, [action.payload.id]: action.payload};
        case DELETE_COIN:
            return _.omit(state, action.payload);
        case FETCH_COINS:
            return {..._.mapKeys(action.payload, 'id')};
        case FETCH_FILTERED_COINS:
            return {..._.mapKeys(action.payload, 'id')};
        default:
            return state;
    }
}
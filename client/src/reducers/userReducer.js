import _ from 'lodash';
import {
    FETCH_USER,
    FETCH_USERS,
    DELETE_USER,
    UPDATE_USER,
    CREATE_USER
} from '../actions/users/types';

export default (state = {}, action) => {
    switch (action.type) {
        case FETCH_USER:
            return {...state, [action.payload.id]: action.payload};
        case CREATE_USER:
            return {...state, [action.payload.id]: action.payload};
        case UPDATE_USER:
            console.log(action.payload)
            return {...state, [action.payload.id]: action.payload};
        case DELETE_USER:
            return _.omit(state, action.payload);
        case FETCH_USERS:
            return {...state, ..._.mapKeys(action.payload, 'id')};
        default:
            return state;
    }
}
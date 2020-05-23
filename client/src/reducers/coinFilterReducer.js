import {
   FETCH_DATA_FOR_FILTER
} from '../actions/coins/types';

export default (state = {}, action) => {
    switch (action.type) {
        case FETCH_DATA_FOR_FILTER:
            return  action.payload;
        default:
            return state;
    }
}
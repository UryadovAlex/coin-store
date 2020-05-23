import apis from "../../apis";
import {ADD_TO_CART, DELETE_FROM_CART, FETCH_FROM_CART, UPDATE_CART} from "../cart/types";

export const addToCart = (userId, coinId) => async dispatch => {
    const response = await apis.post(`/cart`, {userId, coinId});
    dispatch({ type: ADD_TO_CART, payload: {id: coinId, userId, coinId} });
}

export const fetchFromCart = userId => async dispatch => {
    const response = await apis.get(`/cart/${userId}`);
    dispatch({ type: FETCH_FROM_CART, payload: response.data.data});
}

export const deleteFromCart = id => async dispatch => {
    await apis.delete(`/cart/${id}`);
    dispatch({ type: DELETE_FROM_CART, payload: id });
}


export const updateCart = coinId => async (dispatch, getState) => {
    let qty = getState().cart[coinId].qty + 1;
    await apis.put(`/cart/${coinId}`, {qty});
    dispatch({ type: UPDATE_CART, payload: {coinId, qty} });
}
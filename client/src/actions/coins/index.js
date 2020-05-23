import apis from "../../apis";
import history from "../../history";
import {
    CREATE_COIN,
    FETCH_COIN,
    FETCH_COINS,
    DELETE_COIN,
    UPDATE_COIN,
    FETCH_DATA_FOR_FILTER,
    FETCH_FILTERED_COINS
} from "../coins/types";

function createFormData(formValue) {
    let formData = new FormData();
    formData.append('name', formValue.name);
    formData.append('value', formValue.value);
    formData.append('year', formValue.year);
    formData.append('price', formValue.price);
    formData.append('country', formValue.country);
    formData.append('metal', formValue.metal);
    formData.append('shortDescription', formValue.shortDescription);
    formData.append('fullDescription', formValue.fullDescription);
    formData.append('quality', formValue.quality);
    formData.append('weight', formValue.weight);
    formData.append('coinType', formValue.coinType);
    formData.append('obverseLink', formValue.obverseLink[0]);
    formData.append('reverseLink', formValue.reverseLink[0]);
    return formData;
}

export const createCoin = formValue => async (dispatch, getState) => {
    const formData = createFormData(formValue);
    apis.defaults.headers.common['authorization'] = getState().loggedUser.token;
    const response = await apis.post('/coins', formData);

    const newCoin = {id: response.data.id, ...formValue}
    dispatch({ type: CREATE_COIN, payload: newCoin });
    history.goBack();
}

export const fetchCoins = type => async dispatch => {
    const response = await apis.get(`/coins/category/${type}`);
    dispatch({ type: FETCH_COINS, payload: response.data.data });
}

export const fetchCoin = id => async dispatch => {
    const response = await apis.get(`/coins/${id}`);
    dispatch({ type: FETCH_COIN, payload: response.data.data[0] });
}

export const deleteCoin = id => async (dispatch, getState) => {
    apis.defaults.headers.common['authorization'] = getState().loggedUser.token;
    await apis.delete(`/coins/${id}`);
    dispatch({ type: DELETE_COIN, payload: id });
}

export const updateCoin = (id, formValues) => async (dispatch, getState) => {
    const formData = createFormData(formValues);
    apis.defaults.headers.common['authorization'] = getState().loggedUser.token;
    const response = await apis.put(`/coins/${id}`, formData);
    dispatch({ type: UPDATE_COIN, payload: id });
    history.goBack();
}

export const searchCoins = search => async dispatch => {
    const response = await apis.get(`/coins?search=${search}`);
    dispatch({ type: FETCH_COINS, payload: response.data.data });
    history.push('/coins');
}

export const getDataForFilter = () => async dispatch => {
    const response = await apis.get(`/coins/filter`);
    dispatch({ type: FETCH_DATA_FOR_FILTER, payload: response.data.data });
}

export const getFilteredCoins = values => async dispatch => {
    const response = await apis.post(`/coins/filteredCoins`, {...values});
    console.log(values)
    console.log(response.data.data);
    dispatch({ type: FETCH_FILTERED_COINS, payload: response.data.data });
    history.push('/coins');
}


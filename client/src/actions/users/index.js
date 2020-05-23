import apis from "../../apis";
import history from "../../history";
import {
    FETCH_USER,
    FETCH_USERS,
    DELETE_USER,
    UPDATE_USER,
    CREATE_USER,
    LOGIN_USER,
    LOGOUT_USER
} from './types'

export const createUser = formValue => async dispatch => {
    const response = await apis.post('/users', {...formValue});
    const {firstName, lastName, gender, email} = formValue;
    const newUser = {id: response.data.id, firstName, lastName, gender, email, isAdmin: 0}
    console.log(newUser);
    dispatch({type: CREATE_USER, payload: newUser});
    history.push('/');
}

export const fetchUsers = () => async (dispatch, getState) => {
    apis.defaults.headers.common['authorization'] = getState().loggedUser.token;
    apis.defaults.headers.common['id'] = getState().loggedUser.id;
    const response = await apis.get('/users');
    dispatch({type: FETCH_USERS, payload: response.data.data})
}

export const fetchUser = id => async (dispatch, getState) => {
    apis.defaults.headers.common['authorization'] = getState().loggedUser.token;
    apis.defaults.headers.common['id'] = getState().loggedUser.id;
    const response = await apis.get(`/users/${id}`);
    dispatch({type: FETCH_USER, payload: response.data.data[0]});
}

export const deleteUser = id => async (dispatch, getState) => {
    apis.defaults.headers.common['authorization'] = getState().loggedUser.token;
    apis.defaults.headers.common['id'] = getState().loggedUser.id;
    await apis.delete(`/users/${id}`);
    dispatch({type: DELETE_USER, payload: id});
    history.push('/users');
}

export const updateUser = (id, formValue) => async (dispatch, getState) => {
    apis.defaults.headers.common['authorization'] = getState().loggedUser.token;
    apis.defaults.headers.common['id'] = getState().loggedUser.id;
    const response = await apis.put(`/users/${id}`, {...formValue});
    dispatch({type: UPDATE_USER, payload: response.data});
    history.push('/');
}

export const userLogin = formValue => async dispatch => {
    const response = await apis.post(`/users/login`, {...formValue});
    if (response.data.success){
        dispatch({type: LOGIN_USER, payload: response.data});
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("id", response.data.id);
        localStorage.setItem("name", response.data.name);
        localStorage.setItem("isAdmin", response.data.isAdmin);
        history.push('/');
    } else {
        console.log(response.data)
        dispatch({type: LOGIN_USER, payload: response.data});
    }
}

export const userLogout = () => {
    localStorage.clear();
    history.push('/');
    return ({type: LOGOUT_USER});
}


import { GET_TECHS, SET_LOADING, ERROR, ADD_TECH, DELETE_TECH, SET_CURRENT_TECH, UPDATE_TECH } from './types';

export const getTechs = () => async dispatch => {

    try {
        setLoading();
        const result = await fetch('http://localhost:5000/techs');
        const data = await result.json();
        dispatch({
            type: GET_TECHS,
            payload: data
        })
    } catch (error) {
        console.log(error);
        dispatch({
            type: ERROR,
            payload: error.response.statusText
        })
    }

}

export const addTech = (tech) => async dispatch => {
    try {
        setLoading();
        const result = await fetch('http://localhost:5000/techs', { method: 'POST', body: JSON.stringify(tech), headers: { 'Content-Type': 'application/json' } });
        const data = await result.json();
        dispatch({
            type: ADD_TECH,
            payload: data
        })
    } catch (error) {
        dispatch({ type: ERROR, payload: error.response.statusText })
    }
}

export const deleteTech = (id) => async dispatch => {
    try {
        setLoading()
        await fetch(`http://localhost:5000/techs/${id}`, { method: 'DELETE' });
        dispatch({
            type: DELETE_TECH,
            payload: id
        })
    } catch (error) {
        dispatch({
            type: ERROR,
            payload: error.response.statusText
        });
    }
}

export const updateTech = (tech) => async dispatch => {
    try {
        setLoading();
        const result = await fetch(`http://localhost:5000/logs/${tech.id}`, { method: 'PUT', body: JSON.stringify(tech), headers: { 'Content-Type': 'application/json' } });
        const data = await result.json();
        dispatch({
            type: UPDATE_TECH,
            payload: data
        })
    } catch (error) {
        console.log(error);
        dispatch({
            type: ERROR,
            payload: error.response.statusText
        })

    }
}

export const setCurrent = (tech) => {
    console.log(tech);
    return {
        type: SET_CURRENT_TECH,
        payload: tech
    }
}

export const setLoading = () => {
    return {
        type: SET_LOADING
    }
}
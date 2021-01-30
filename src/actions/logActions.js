import { GET_LOGS, LOGS_ERROR, SET_LOADING, ADD_LOG, ERROR_TECH, DELETE_LOG, UPDATE_LOG, SET_CURRENT, CLEAR_CURRENT } from './types';

export const getLogs = () => async dispatch => {
    try {
        setLoading();
        const result = await fetch('http://localhost:5000/logs');
        const data = await result.json();
        dispatch({
            type: GET_LOGS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: LOGS_ERROR,
            payload: error.response.statusText
        })
    }
}

export const addLog = (log) => async dispatch => {
    try {
        setLoading();
        const result = await fetch('http://localhost:5000/logs', {
            method: 'POST',
            body: JSON.stringify(log),
            headers: { 'Content-Type': 'application/json' }
        }
        );
        const data = await result.json();
        dispatch({ type: ADD_LOG, payload: data });
    } catch (error) {
        console.log(error);
        dispatch({
            type: LOGS_ERROR,
            payload: error.response.data
        })
    }
}

export const deleteLog = (id) => async dispatch => {

    try {
        setLoading();
        await fetch(`http://localhost:5000/logs/${id}`, { method: 'DELETE' });
        dispatch({
            type: DELETE_LOG,
            payload: id
        })
    } catch (error) {
        dispatch({
            type: ERROR_TECH,
            payload: error.response.data
        })
    }
}

export const updateLog = (log) => async dispatch => {
    try {
        setLoading();
        const result = await fetch(`http://localhost:5000/logs/${log.id}`, { method: 'PUT', body: JSON.stringify(log), headers: { 'Content-Type': 'application/json' } });
        const data = await result.json();
        dispatch({
            type: UPDATE_LOG,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: ERROR_TECH,
            payload: error.response.data
        })
    }
}

export const setCurrent = log => {
    return {
        type: SET_CURRENT,
        payload: log
    }
}

export const clearCurrent = () => {
    return {
        type: CLEAR_CURRENT,
    }
}

export const setLoading = () => {
    return {
        type: SET_LOADING
    }
}
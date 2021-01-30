import { GET_LOGS, ERROR, SET_LOADING, ADD_LOG, DELETE_LOG, UPDATE_LOG, LOG_SET_CURRENT, LOG_CLEAR_CURRENT, SEARCH_LOG } from './types';

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
            type: ERROR,
            payload: error.response.statusText
        })
    }
}

export const searchLog = (text) => async dispatch => {
    try {
        setLoading();
        const result = await fetch(`http://localhost:5000/logs?q=${text}`);
        const data = await result.json();
        dispatch({
            type: SEARCH_LOG,
            payload: data
        })
    } catch (error) {
        dispatch({ type: ERROR, payload: error.response.data });
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
        dispatch({
            type: ERROR,
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
            type: ERROR,
            payload: error.response.data
        })
    }
}

export const updateLog = (log) => async dispatch => {
    try {
        setLoading();
        const result = await fetch(`http://localhost:5000/logs/${log.id}`, {
            method: 'PUT', body: JSON.stringify(log),
            headers: { 'Content-Type': 'application/json' }
        });
        const data = await result.json();
        dispatch({
            type: UPDATE_LOG,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: ERROR,
            payload: error.response.data
        })
    }
}

export const setCurrent = log => {
    return {
        type: LOG_SET_CURRENT,
        payload: log
    }
}

export const clearCurrent = () => {
    return {
        type: LOG_CLEAR_CURRENT,
    }
}

export const setLoading = () => {
    return {
        type: SET_LOADING
    }
}
import { GET_LOGS, LOGS_ERROR, SET_LOADING } from './types';

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
            payload: error.response.data
        })
    }
}

export const setLoading = () => {
    return {
        type: SET_LOADING
    }
}
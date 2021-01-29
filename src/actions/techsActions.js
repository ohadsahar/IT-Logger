import { GET_TECHS, SET_LOADING, ERROR_TECH } from './types';

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
            type: ERROR_TECH,
            payload: error.response.statusText
        })
    }

}

export const setLoading = () => {
    return {
        type: SET_LOADING
    }
}
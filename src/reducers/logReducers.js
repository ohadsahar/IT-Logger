import { GET_LOGS, SET_LOADING, LOGS_ERROR, ADD_LOG, DELETE_LOG, UPDATE_LOG, SET_CURRENT, CLEAR_CURRENT, SEARCH_LOG } from '../actions/types';

const initialState = {
    logs: null,
    current: null,
    loading: false,
    error: null,
}

export default (state = initialState, action) => {
    switch (action.type) {
        case GET_LOGS:
            return {
                ...state,
                logs: action.payload,
                loading: false
            }
        case SET_LOADING:
            return {
                ...state,
                loading: true
            }
        case LOGS_ERROR:
            return {
                ...state,
                error: action.payload
            }
        case ADD_LOG:
            return {
                ...state,
                logs: [...state.logs, action.payload],
                loading: false
            }
        case DELETE_LOG:
            return {
                ...state,
                logs: state.logs.filter(log => log.id !== action.payload),
                loading: false
            }
        case SEARCH_LOG:
            return {
                ...state,
                logs: action.payload
            }
        case SET_CURRENT:
            return {
                ...state,
                current: action.payload
            }
        case CLEAR_CURRENT:
            return {
                ...state,
                current: null
            }
        case UPDATE_LOG:
            console.log(action.payload);
            return {
                ...state,
                logs: state.logs.map(log => log.id === action.payload.id ? action.payload : log),
                loading: false
            }
        default:
            return state;

    }
}
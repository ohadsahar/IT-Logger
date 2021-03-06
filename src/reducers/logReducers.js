import { GET_LOGS, SET_LOADING, ERROR, ADD_LOG, DELETE_LOG, UPDATE_LOG, LOG_SET_CURRENT, LOG_CLEAR_CURRENT, SEARCH_LOG } from '../actions/types';

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
        case ERROR:
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
        case LOG_SET_CURRENT:
            return {
                ...state,
                current: action.payload
            }
        case LOG_CLEAR_CURRENT:
            return {
                ...state,
                current: null
            }
        case UPDATE_LOG:
            return {
                ...state,
                logs: state.logs.map(log => log.id === action.payload.id ? action.payload : log),
                loading: false
            }
        default:
            return state;

    }
}
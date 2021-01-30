import { GET_TECHS, SET_LOADING, ADD_TECH, DELETE_TECH, UPDATE_TECH, SET_CURRENT_TECH } from '../actions/types';

const initialState = {
    techs: null,
    current: null,
    loading: false,
    error: null,
}

export default (state = initialState, action) => {
    switch (action.type) {
        case GET_TECHS:
            return {
                ...state,
                techs: action.payload,
                loading: false
            }
        case ADD_TECH:
            console.log()
            return {
                ...state,
                techs: [...state.techs, action.payload],
                loading: false
            }
        case DELETE_TECH:
            return {
                ...state,
                techs: state.techs.filter(tech => tech.id !== action.payload),
                loading: false
            }
        case UPDATE_TECH:
            return {
                ...state,
                techs: state.techs.map(tech => tech.id === action.payload.id ? action.payload : tech),
                loading: false
            }
        case SET_CURRENT_TECH:
            return {
                ...state,
                current: action.payload
            }
        case SET_LOADING:
            return {
                ...state,
                loading: true
            }


        default:
            return state;
    }
}
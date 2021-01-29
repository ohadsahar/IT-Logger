import { combineReducers } from 'redux';
import logReducer from './logReducers';
import techReducer from './TechReducer';

export default combineReducers({
    log: logReducer,
    tech: techReducer
});
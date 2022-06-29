import { combineReducers } from 'redux';

import problemReducer from './problemReducer';
import filterReducer from './filterReducer';
import solvedReducer from './solvedReducer';

const rootReducer = combineReducers({
    solved: solvedReducer,
    problems: problemReducer,
    filters: filterReducer,
});

export default rootReducer;

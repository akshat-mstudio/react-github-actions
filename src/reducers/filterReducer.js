import { filterProblemsType } from '../constants';

const initialState = {
    level: 'All',
    status: 'Unsolved',
    topics: []
}

const filterReducer = (state = initialState, action) => {
    switch (action.type) {
        case filterProblemsType.UPDATE_FILTER: {
            const { key, value } = action.payload;
            const newState = { ...state };
            newState[key] = value;
            return newState;
        }

        default:
            return state;
    }
}

export default filterReducer;
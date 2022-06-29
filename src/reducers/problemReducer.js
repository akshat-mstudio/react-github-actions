import { fetchProblemsType } from '../constants'

const initialState = []

const problemReducer = (state = initialState, action) => {

    switch (action.type) {
        case fetchProblemsType.FETCH_PROBLEMS_SUCCESS: {
            return action.payload;
        }
        default:
            return state;
    }

}

export default problemReducer;
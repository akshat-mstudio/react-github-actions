import { solveProblemsType } from '../constants'

const initialState = []

const solvedReducer = (state = initialState, action) => {

    switch (action.type) {
        case solveProblemsType.FETCH_SOLVED_SUCCESS: {
            return action.payload;
        }
        case solveProblemsType.MARK_UNSOLVED: {
            const { id } = action.payload
            const idx = state.indexOf(id)
            
            if (idx !== -1) {
                const newState = [...state]
                newState.splice(idx, 1)
                return newState
            }

            return state
        }
        case solveProblemsType.MARK_SOLVED: {
            const { id } = action.payload
            const idx = state.indexOf(id)

            if (idx === -1) {
                return [...state, id]
            }
            
            return state
        }
        default:
            return state;
    }

}

export default solvedReducer;
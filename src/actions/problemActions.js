import { fetchProblemsType } from '../constants';

const fetchProblems = () => ({
        type: fetchProblemsType.FETCH_PROBLEMS
})

const setProblems = (payload) => ({
    type: fetchProblemsType.FETCH_PROBLEMS_SUCCESS,
    payload
})



export { fetchProblems, setProblems }
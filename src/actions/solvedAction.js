import { solveProblemsType } from '../constants';

const fetchSolved = () => ({
    type: solveProblemsType.FETCH_SOLVED
})

const markSolved = (payload) => ({
    type: solveProblemsType.MARK_SOLVED,
    payload
})

const markUnsolved = (payload) => ({
    type: solveProblemsType.MARK_UNSOLVED,
    payload
})

const fetchSolvedSuccess = (payload) => ({
    type: solveProblemsType.FETCH_SOLVED_SUCCESS,
    payload
})

export { fetchSolved, markSolved, markUnsolved, fetchSolvedSuccess }
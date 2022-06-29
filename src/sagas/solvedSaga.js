import { put, takeEvery, select } from 'redux-saga/effects'
import { fetchProblems, fetchSolvedSuccess } from '../actions'
import { solveProblemsType } from "../constants"

export const getSolved = state => state.solved

export function* handleFetchSolved() {
    try {
        const solved = yield JSON.parse(localStorage.getItem('solved') || '[]');
        yield put(fetchSolvedSuccess(solved))
        yield put(fetchProblems())
    } catch (e) {

    }
}

export function* handleUpdateSolved() {
    try {
        const solved = yield select(getSolved)
        yield localStorage.setItem('solved', JSON.stringify(solved))
        yield put(fetchProblems())
    } catch (e) {

    }
}

export default function* watchFetchSolved() {
    yield takeEvery(solveProblemsType.FETCH_SOLVED, handleFetchSolved)
    yield takeEvery(solveProblemsType.MARK_SOLVED, handleUpdateSolved)
    yield takeEvery(solveProblemsType.MARK_UNSOLVED, handleUpdateSolved)
}
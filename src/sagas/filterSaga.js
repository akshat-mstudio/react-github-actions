import { put, takeEvery } from 'redux-saga/effects'
import { fetchProblems } from '../actions'
import { filterProblemsType } from "../constants"

export function* handleUpdateFilter() {
    yield put(fetchProblems())
}

export default function* watchFilterSaga() {
    yield takeEvery(filterProblemsType.UPDATE_FILTER, handleUpdateFilter)
}
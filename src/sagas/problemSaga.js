import { put, select, takeEvery } from 'redux-saga/effects'
import { setProblems } from '../actions'
import { fetchProblemsType } from "../constants"
import data from '../data.json'

export const getFilter = state => state.filters
export const getSolved = state => state.solved

export function* handleLoadProblems() {
    try {
        const filter = yield select(getFilter)
        const solved = yield select(getSolved)
        const payload = yield data.map(d => ({ ...d, solved: solved.includes(d.id) }))
            .filter(d => (filter.topics && filter.topics.length ? filter.topics.some(t => t === d.tag) : true) &&
                (filter.level === 'All' ? true : d.level === filter.level) &&
                (filter.status === 'Solved' ? d.solved : !d.solved))

        yield put(setProblems(payload))

    } catch (e) {

    }
}

export default function* watchLoadProblems() {
    yield takeEvery(fetchProblemsType.FETCH_PROBLEMS, handleLoadProblems)
}
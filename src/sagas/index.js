import { all } from 'redux-saga/effects'
import problemSaga from './problemSaga'
import filterSaga from './filterSaga'
import solvedSaga from './solvedSaga'

export default function* rootSaga() {
    yield all([problemSaga(), filterSaga(), solvedSaga()])
}

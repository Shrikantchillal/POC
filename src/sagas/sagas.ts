import { takeEvery, put, delay, takeLatest } from "redux-saga/effects";

function* incrementFun() {
    yield delay(1000);
    yield put({ type: 'INCREMENT' });
}

export function* watchIncrement() {
    yield takeLatest('INCREMENT', incrementFun)
};
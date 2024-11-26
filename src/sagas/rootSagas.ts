import { all } from 'redux-saga/effects';
import { watchIncrement } from './sagas';


export function* rootSagas() {
    yield all([
        watchIncrement()
    ]);
}
import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import Main from './src/main';
import MyContext from './src/common/MyContext';
import ErrorBoundary from './src/common/ErrorBoundary';
import { Provider } from 'react-redux';
import { applyMiddleware, configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import reducer from './src/reducer/reducer';
import { rootSagas } from './src/sagas/rootSagas';

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
    reducer: reducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(rootSagas);

const Index = () => {
    const [text, setText] = useState('shrikant');

    return (
        <Provider store={store}>
            <MyContext.Provider value={{ text, setText }}>
                <ErrorBoundary>
                    <Main />
                </ErrorBoundary>
            </MyContext.Provider>
        </Provider>
    )
}

const root = ReactDOM.createRoot(document.getElementById('app')!);
root.render(<Index />);
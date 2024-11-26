import React from 'react';
import { store } from '../../app';
import { useSelector } from 'react-redux';


const CounterSagas = () => {
    const count = useSelector((state: any) => state.count);
    const action = (type: any) => store.dispatch(type);

    return (
        <>
            <div>{count}</div>
            <button onClick={() => action({ type: 'INCREMENT' })}>Increment +</button>
        </>
    )
};

export default CounterSagas;
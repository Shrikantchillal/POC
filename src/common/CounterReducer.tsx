import React, { useReducer } from "react";

type stateType = {
    count: number;
};

type actionType = {
    type: string;
}

const initialState = { count: 0 };

const reducer = (state: stateType, action: actionType) => {
    switch (action.type) {
        case 'increment':
            return { ...state, count: state.count + 1 };
        case 'decrement':
            return { ...state, count: state.count - 1 };
        default:
            return { ...state };
    }
}

const CounterReducer = () => {
    const [state, dispatch] = useReducer(reducer, initialState)

    return (
        <>
            <div>{state.count}</div>
            <button onClick={() => dispatch({ type: 'increment' })}>Increment +</button>
            <button onClick={() => dispatch({ type: 'decrement' })}>Decrement -</button>
        </>
    )
};

export default CounterReducer;
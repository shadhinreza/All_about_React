import React from 'react';

const CounterController = ({handleInc,handleDecre,count}) => {
    return (
        <div>
            <button onClick={handleInc}>Increment</button>
            <span>{count}</span>
            <button onClick={handleDecre}>Decrement</button>
        </div>
    );
}

export default CounterController;

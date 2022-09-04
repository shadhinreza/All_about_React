import React from 'react';
import { useReducer } from 'react';

let initial = 20
let reducer = (state, action) => {
    switch(action){
        case 'increment':
            return state + 1
        case 'decrement':
            return state - 1
        case 'reset':
            return initial
        default: return state
    }
}

const Test = () => {
    let [count, dispatch] = useReducer(reducer, initial);    
    return (
        <div>
            <span>{count}</span>
            <br />
           <button type='button' onClick={()=> dispatch('increment')}>increment</button> 
        </div>
    );
}

export default Test;

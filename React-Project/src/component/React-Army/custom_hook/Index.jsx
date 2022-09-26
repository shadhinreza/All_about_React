import React from 'react';
import CounterController from './CounterController';
import useCustomHook from './useCustomHook';

const Index = () => {
    const {count: count1, handleInc: handleInc1, handleDecre: handleDecre1} = useCustomHook({initialValue: 10})
    const {count: count2, handleInc: handleInc2, handleDecre: handleDecre2} = useCustomHook({initialValue: 5})

    return (
        <div>
           <CounterController handleInc={handleInc1} handleDecre={handleDecre1} count={count1}/>
           <CounterController handleInc={handleInc2} handleDecre={handleDecre2} count={count2}/>
        </div>
    );
}

export default Index;

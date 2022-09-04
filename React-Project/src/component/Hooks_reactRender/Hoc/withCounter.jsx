import React, { useState } from 'react';

const withCounter = (OriginalComponent) => {
    const Counter = () => {
        const [count, setCount] = useState(0)
        const handleCounter = () => {
            setCount(count + 1)
        }
        return(
            <OriginalComponent count={count} handleCounter={handleCounter}/>
        )
    }
    return Counter;
}

export default withCounter;

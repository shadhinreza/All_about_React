import React from 'react';
import withCounter from './withCounter';

const TimerCounter = ({count, handleCounter}) => {
    return (
        <div>
           <button type='button' onClick={handleCounter}>Count {count} Times</button> 
        </div>
    );
}

export default withCounter(TimerCounter);

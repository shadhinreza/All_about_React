import React from 'react';
import withCounter from './withCounter';

const HoverCounter = ({count, handleCounter}) => {
    return (
        <div>
           <h3 onMouseOver={handleCounter}>Hover {count} Times</h3> 
        </div>
    );
}

export default withCounter(HoverCounter);
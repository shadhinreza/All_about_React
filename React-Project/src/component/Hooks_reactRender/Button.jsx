import React from 'react';

const Button = ({handleClick, children}) => {
    console.log(`Button Rendaring... ${children}`);
    return (
        <div>
            <button type='button' onClick={handleClick}>{children}</button>
        </div>
    );
}

export default React.memo(Button);

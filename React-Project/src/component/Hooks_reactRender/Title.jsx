import React from 'react';

const Title = () => {
    console.log('Title Rendaring...')
    return (
        <div>
            <h6>React Hook Title </h6>
        </div>
    );
}

export default React.memo(Title);

import React from 'react';

const Showcount = ({title, count}) => {
    console.log(`Show count Rendaring...${title}`);
    return (
        <div>
            {title} is {count}
        </div>
    );
}

export default React.memo(Showcount);

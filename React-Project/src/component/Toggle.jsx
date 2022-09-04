import React, {useState} from 'react';

const Toggle = () => {
    const [toggle, setToggle] = useState(true);
    return (
        <div className='container mt-3'>
            <div style={{backgroundColor: 'palegreen', padding:'1rem'}}>
                {toggle && ( 
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis, sunt sequi! Ut obcaecati beatae modi quia asperiores similique perspiciatis explicabo et quisquam, tempora pariatur doloribus placeat reiciendis, architecto soluta molestias.</p>
                    )}
            </div>
            <div style={{textAlign: 'center', marginTop: '15px'}}>
                <button onClick={() => setToggle(!toggle)} type='button' className='me-2'>{toggle ? 'Hide' : 'Show'}</button>
            </div>
            
        </div>
    );
}

export default Toggle;

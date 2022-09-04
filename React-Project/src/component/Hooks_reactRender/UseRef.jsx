import React, { useRef, useEffect } from 'react';

const UseRef = () => {
    const inputRef = useRef(null);
    useEffect(() => {
       inputRef.current.focus()
        
    }, []);
    return (
        <div>
           <input type="text" placeholder='Enter something...' ref={inputRef} /> 
        </div>
    );
}

export default UseRef;

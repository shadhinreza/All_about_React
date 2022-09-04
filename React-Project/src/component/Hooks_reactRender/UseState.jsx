import React from 'react';
import {useState} from 'react'

const UseState = () => {
    let [value, setValue] = useState('');
    let [warning, setWarning] = useState(null);
    let changeValue = (e) =>{
        let inputValue = e.target.value;
        let warning2 = inputValue.includes('.js') ? 'Achieve you to Javascript Skill' : null;
        setValue(inputValue)
        setWarning(warning2)
        
    }
    return (
        <div className='col-md-4'>
            <h5>{value}</h5>
            <br />
            <input type="text" value={value} placeholder='Write Something...' onChange={changeValue} className='form-control'/>
            <br />
            <p>{warning ? warning : 'Good job!' }</p>
        </div>
    );
}

export default UseState;

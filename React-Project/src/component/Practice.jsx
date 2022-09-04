import React, {useState} from 'react';


const Practice = () => {
    let [name, setName] = useState('');
    const changeValue = (e) => {
        setName(e.target.value); 
    }
    return (
        <div>
           {/* <span>{count}</span>
           <br /> 
           <button type='button' onClick={()=>setNum({count: count + 1})}>Count - {count}</button> */}
           <input type="text" name={name} value={name} onChange={changeValue} />
           <p>{name}</p>
        </div>
    );
}

export default Practice;

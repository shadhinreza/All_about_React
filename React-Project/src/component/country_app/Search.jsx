import React,{useState,useEffect} from 'react';

const Search = (props) => {
    const [value, setValue] = useState('');
    const valueHandler = (e) => {
        setValue(e.target.value);
    }
    useEffect(() => {
        props.onSearch(value)
    }, [value]);
    return (
        <div className='offset-4 col-md-4 mb-md-5'>
            <input type="text" placeholder='Search Country...' className='form-control' value={value} onChange ={valueHandler}/>
        </div>
    );
}

export default Search;

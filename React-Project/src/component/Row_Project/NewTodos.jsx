import React, {useState} from 'react';

const NewTodos = ({addTodos}) => {
    const [todos, setTodos] = useState({title: '', desc: ''});
    const {title, desc} = todos;

    const changeHandler = (e) => {
        const name = e.target.name;
        setTodos((prevTodos) => {
            return {...prevTodos, [name]: e.target.value}
        })
    }
    const submitHandler = (e) =>{
        e.preventDefault();
        addTodos(todos)
        setTodos({title: '', desc: '' })
    }
    return (
        <form onSubmit={submitHandler}>
            <div>
                <label htmlFor="title" className='form-label'>Title : </label>
                <input type="text" onChange={changeHandler} className='form-control' placeholder='Enter Title' name='title' value={title} />
            </div>
            <div>
                    <label htmlFor="desc" className='form-label'>Description : </label>
                    <textarea name="desc" id="desc" placeholder='Enter Something...' className='form-control' onChange={changeHandler} value={desc} />
            </div>
            <button type='submit' className='btn btn-primary mt-3'>Add Todo</button>
        </form>
    );
}

export default NewTodos;

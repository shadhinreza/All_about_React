import React, {useState} from 'react';
import NewTodos from './NewTodos';
import Todos from './Todos';
import {v4 as uuidv4} from 'uuid'

const Home = () => {
    const [todos, settodos] = useState([]);
    const ShowTodos = (todoData) => {
        settodos((prevtodos) => {
            return [...prevtodos, {id: uuidv4(), todoData}];
        });
    };
    const deleteHandler = (id) => {
       const filterTodos =  todos.filter(todo => todo.id !== id);
       settodos(filterTodos)
    }
    return (
        <div className='container mt-3'>
            <div className="row">
                <div className="offset-4 col-md-4 bgAll">
                <NewTodos addTodos={ShowTodos}/>
                <Todos todos={todos} deleteHandler={deleteHandler}/> 
                </div>
            </div>
        </div>
    );
}

export default Home;

import React from 'react';
import Todo from './Todo'

const Todos = ({todos, deleteHandler}) => {
    return (
        <section>
            {todos.map((todo) => <Todo key={todo.id} todo={todo.todoData} id={todo.id} deleteHandler={deleteHandler} />)}
        </section>
    );
}

export default Todos;

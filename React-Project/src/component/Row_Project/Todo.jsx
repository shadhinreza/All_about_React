import React from 'react';


const Todo = (props) => {
    const {title, desc} = props.todo;
    const {id} = props;
    const deleteHandler = (id) => {
        props.deleteHandler(id)
    }
    return (
        <article className='mt-3 d-flex bg-dark justify-content-between ps-2'>
            <div className='mt-1'>
                <h5>{title}</h5>
                <p>{desc}</p>
            </div>
            <div>
                <button onClick={() => deleteHandler(id)} className='btn btn-danger mt-4 btn1'>
                    <i className='fa fa-trash'></i>
                </button>
            </div>  
        </article>
    );
}

export default Todo;

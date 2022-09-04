import React,{useReducer,useState} from 'react';
import {v4 as uuidv4} from 'uuid';
import './reducer.css'

const Modal = ({modalText}) => {
    return (
    <span className='text-success'>{modalText}</span>
    )
}
const initialState = {
    books: [
    {id: 1, name: 'javascript1 Eloquent'},
    {id: 2, name: 'javascript2 Eloquent'},
    {id: 3, name: 'javascript3 Eloquent'},
    {id: 4, name: 'javascript4 Eloquent'},
    ],
    isModal: false,
    modalText: ''
}
const reducer = (state, action) => {
    if(action.type === 'ADD'){
        const allbooks = [...state.books, action.payload];
        return {
            ...state,
            books: allbooks,
            isModal:true,
            modalText: 'Book is Added',
        }
    }
    if(action.type === 'Remove'){
        const filter = [...state.books].filter((book) =>  book.id !== action.payload);
        return{
            ...state,
            books: filter, 
            isModal:true,
            modalText: 'Book is Removed',
        }
    }
}
const Usereducer = () => {
    const [allBooks, dispatch] = useReducer(reducer, initialState);
    const [newInputvalue,setValue] = useState('');

    const submitHnadler = (e) => {
        e.preventDefault();
        const newBook = {id: uuidv4(), name: newInputvalue}
        dispatch({type: 'ADD', payload: newBook})
        setValue('');
    }
    const removeHandler = (id) => {
        dispatch({type: 'Remove', payload: id})
        
    }
    return (
        <div className='container mt-3'> 
            <form onSubmit={submitHnadler}>
                <label htmlFor="name" className='me-2'>Name : </label>
                <input type="text" placeholder='Enter book name...' className='mb-3' value={newInputvalue} onChange={(e) => setValue(e.target.value)} />
                <button type='submit'>Submit</button> 
            </form>
            {allBooks.isModal && <Modal modalText={allBooks.modalText} />}
            {allBooks.books.map(book => {
                const {id, name} = book;
                return(
                    <li key={id}>{name} 
                        <button type='button' onClick={() => removeHandler(id)} className='btn'>Remove</button>
                    </li>
                )
            })}
        </div>
    );
}

export default Usereducer;

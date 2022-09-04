import React, {useState} from 'react';

const Books = [
    {id: 1, name: 'javascript1 Eloquent'},
    {id: 2, name: 'javascript2 Eloquent'},
    {id: 3, name: 'javascript3 Eloquent'},
    {id: 4, name: 'javascript4 Eloquent'},
]
const Modal = ({modalText}) => {
    return <span className='text-success'>{modalText}</span>
}
const Test = () => {
    const [books, setBooks] = useState(Books);
    const [bookName, setBookName] = useState('');
    const [ismodalOpen, setisModalOpen] = useState(false);
    const [modalText, setModalText] = useState('');
    const submitHnadler = (e) => {
        e.preventDefault();
        const newBooks = {id: new Date().getTime().toString(), name: bookName};
        setBooks(prevState => [...prevState, newBooks])
        setBookName('')
        setisModalOpen(true);
        setModalText('Book is Added');
        setTimeout(() => {
            setisModalOpen(false)
        }, 1000);
    }
    return (
        <div className='container mt-3'>
            <form onSubmit={submitHnadler}>
                <label htmlFor="name" className='me-2'>Name : </label>
                <input type="text" placeholder='Enter book name...' className='mb-3' value={bookName} onChange={(e) => setBookName(e.target.value)}/>
                <button type='submit'>Submit</button>
                
            </form>
            {ismodalOpen && <Modal modalText={modalText}/>}
            {books.map(book => <li key={book.id}>{book.name}</li>)}   
        </div>
    );
}

export default Test;

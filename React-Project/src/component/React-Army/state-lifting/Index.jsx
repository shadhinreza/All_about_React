import React, {useState} from 'react';
import ContactForm from './ContactForm';
import Table from './Table';

const Index = () => {
    const [indexState, setIndexState] = useState([])
    const getData = (getState) => {
        setIndexState([].concat(indexState, getState))
    }
    return (
        <div className='m-auto col-md-4'>
            <h2>Contact App</h2> 
            <ContactForm getData={getData}/>
            <Table indexState={indexState}/>
        </div>
    );
}

export default Index;

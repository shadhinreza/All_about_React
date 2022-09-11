import React from 'react';
import { useState } from 'react';

const int_contact_form_state = {
    name: '',
    email: '',
    group: ''
}

const ContactForm = ({getData}) => {
    const [values, setValues] = useState({...int_contact_form_state})
    const {name, email,group} = values;
    const changeHandlerContact = (e) => {
        setValues({
            ...values,
            [e.target.name] : e.target.value
        })
    }
    const onSubmitHandler = (e) => {
        e.preventDefault();
        console.log(values)
        getData(values)
        setValues({...int_contact_form_state})
    }

    return (
        <form onSubmit={onSubmitHandler}>
            <div>
                <label className="form-label" htmlFor="name">Name:</label>
                <input className='form-control' id='name' type="text" placeholder='Enter your name' name='name' value={name} onChange={changeHandlerContact} />
            </div>
            <div>
                <label className="form-label" htmlFor="email">Email:</label>
                <input className='form-control' id='email' name='email' type="email" placeholder='Enter your email' value={email} onChange={changeHandlerContact} />
            </div>
            <br />
            <select class="form-select" name='group' onChange={changeHandlerContact} value={group}>
                <option selected>Open this select menu</option>
                <option value="all">All</option>
                <option value="none">None</option>
                <option value="office">Office</option>
                <option value="employer">Employer</option>
            </select>
            <button className='btn btn-primary mt-4' type='submit'>Submit</button>
        </form>
    );
}

export default ContactForm;

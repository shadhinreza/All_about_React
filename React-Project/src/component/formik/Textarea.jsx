import React from 'react';
import { Field, ErrorMessage } from 'formik';
import Texterror from './Texterror';

const Textarea = (props) => {
    const {label, name, ...test} = props
    return (
        <div className='col-md-4'>
            <label className='form-label' htmlFor={name}>{label} : </label>
            <Field as='textarea' id={name} name={name} {...test}/>
            <ErrorMessage name={name} component={Texterror}/>
        </div>
    );
}

export default Textarea;

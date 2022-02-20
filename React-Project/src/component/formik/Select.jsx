import React from 'react';
import { Field, ErrorMessage } from 'formik';
import Texterror from './Texterror';


const Select = (props) => {
    const {label, name, options, ...test} = props
    return (
        <div className='col-md-4'>
            <label className='form-label' htmlFor={name}>{label} : </label>
            <Field as='select' id={name} name={name} {...test}>
                {options.map(option =>{
                    return(
                        <option key={option.value} value={option.value}>{option.key}</option>
                    )
                })}
            </Field>
            <ErrorMessage name={name} component={Texterror}/>
        </div>
    );
}

export default Select;

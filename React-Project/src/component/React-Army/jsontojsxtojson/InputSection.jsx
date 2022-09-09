import React from 'react';
import Input from './Input';

const InputSection = ({inputFields, inputFieldsData, type}) => {
    return (
        <div style={{marginTop: '20px'}}>
            <Input type={type} name='a' value={inputFields.a} onChange={inputFieldsData}/>
            <Input type={type} name='b' value={inputFields.b} onChange={inputFieldsData}/>
        </div>
    );
}

export default InputSection;

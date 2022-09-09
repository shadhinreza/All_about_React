import React from 'react';
import Button from './Button';
import { v4 as uuidv4 } from 'uuid';

const Operations = ({handleOps,handleClear}) => {
    const operationsArray = [
        {
            id: uuidv4(),
            text: '+',
            onClick: () => handleOps('+')
        },
        {
            id: uuidv4(),
            text: '-',
            onClick: () => handleOps('-')
        },
        {
            id: uuidv4(),
            text: '*',
            onClick: () => handleOps('*')
        },
        {
            id: uuidv4(),
            text: '/',
            onClick: () => handleOps('/')
        },
        {
            id: uuidv4(),
            text: 'Clear',
            onClick: handleClear
        }
    ]
    return (
        <div>
           {operationsArray.map(ops => <Button key={ops.id} onClick={ops.onClick} text={ops.text} />
           )}
        </div>
    );
}

export default Operations;

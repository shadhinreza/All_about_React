import React from 'react';
import { useNavigate } from 'react-router-dom';

const OrderSummery = () => {
    let navigate = useNavigate()
    return (
        <div>
            <h5>Order Confirmed!</h5>
            <button className='btn btn-primary' onClick={() => navigate(-1)}>Back</button>
        </div>
    );
}

export default OrderSummery;

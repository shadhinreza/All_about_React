import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    let navigate = useNavigate();
    return (
        <div>
            <h2>This is Home Route</h2>
            <button type='submit' onClick={() => navigate('order-summery')} className='btn btn-info'>Place Order</button>
        </div>
    );
}

export default Home;

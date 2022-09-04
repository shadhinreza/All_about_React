import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Product = () => {
    return (
        <>
        <div className='mt-4 col-md-4'>
            <input type="search" className='form-control' placeholder='Search here...'/>
        </div>
        <nav className='mt-5 featureLink'>
            <Link to='feature'>Feature</Link>
            <Link to='new'>New</Link>
        </nav>
        <Outlet />
        </>

    );
}

export default Product;

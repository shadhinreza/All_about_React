import React from 'react';
import { Outlet } from 'react-router-dom';

const Dynamicroute = () => {
    return (
        <div>
            <h5>User 1</h5>
            <h5>User 2</h5>
            <h5>User 3</h5>
            <Outlet />
        </div>
    );
}

export default Dynamicroute;

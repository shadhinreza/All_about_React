import React from 'react';
import {useParams } from 'react-router-dom';

const UserDetails = () => {
    const {id} = useParams();
    return (
        <div>
            <h5>Details about User {id}</h5>
        </div>
    );
}

export default UserDetails;

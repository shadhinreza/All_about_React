import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Tabledata from './Tabledata';


const Home = () => {
    return (
        <div>
            <div>
                <Link to='usercreate'>
                <Button type='button' variant="primary" className='mb-3'>Create User</Button>
                </Link>
            </div>
            <Tabledata />
        </div>
    );
}

export default Home;

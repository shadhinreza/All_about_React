import React from 'react';
import {Routes, Route} from 'react-router-dom'
import Home from './Home';
import Createuser from './Createuser';
import Read from './Read';
import Edit from './Edit';
import Delete from './Delete';
import Notfound from './Notfound';
import { UserProvider } from './UserProvider';


const Main = () => {
    return (
        <div className='container mt-4'>
            <UserProvider>
                <div>
                    <Routes>
                        <Route path='usercreate' element={<Createuser />} />
                        <Route path='/read/:id' element={<Read />} />
                        <Route path='/edit/:id' element={<Edit />} />
                        <Route path='/delete/:id' element={<Delete />} />
                        <Route path='/' element={<Home />}/>
                        <Route path='*' element={<Notfound />}/>
                    </Routes>
                </div>
            </UserProvider>
            
        </div>
    );
}

export default Main;

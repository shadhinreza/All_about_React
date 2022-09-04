import React from 'react';
import {Routes, Route} from 'react-router-dom';
import About from './About'
import Home from './Home';
import Navbar from './Navbar';
import Nomatch from './Nomatch';
import OrderSummery from './OrderSummery';
import Product from './Product';
import Feature from './Feature';
import New from './New';
import Dynamicroute from './Dynamicroute';
import UserDetails from './UserDetails';


const App = () => {
    return (
        <div className='container'>
            <>
            <Navbar />
            <Routes>
                <Route path='/' element={<Home />}/>
                <Route path='about' element={<About />}/>
                <Route path='order-summery' element={<OrderSummery />}/>
                <Route path='product' element={<Product />}>
                    <Route index element={<New />}/>n 
                    <Route path='feature' element={<Feature />}/>
                    <Route path='new' element={<New />}/>
                </Route>
                <Route path='users' element={<Dynamicroute />}>
                    <Route path=':id' element={<UserDetails />}/>
                </Route>
                <Route path='*' element={<Nomatch />}/>
            </Routes>
            </>
        </div>
    );
}

export default App;

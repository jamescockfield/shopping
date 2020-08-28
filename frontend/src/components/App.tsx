import React from 'react';
import Login from 'components/Login';
import Products from 'components/Products';
import Navbar from 'components/Navbar';
import 'css/App.scss';

const App = () => (
    <>
        <Navbar/>
        { window.location.href.endsWith("/login") ?
            <Login/> :
            <Products/>}
        
    </>
);

export default App;

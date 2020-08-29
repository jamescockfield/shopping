import React from 'react';
import Login from 'components/Login';
import Products from 'components/Products';
import Navbar from 'components/Navbar';
import Checkout from 'components/Checkout';
import Favourites from 'components/Favourites';
import 'css/App.scss';

const App = () => {

    let route;
    let path = window.location.href.split("/");

    switch (path[path.length - 1]) {
        case "checkout":
            route = <Checkout/>;
            break;
        case "favourites":
            route = <Favourites/>;
            break;
        case "login":
            route = <Login/>;
            break;
        default:
            route = <Products/>;
    }
    return <>
        <Navbar/>
        { route }
    </>;
};

export default App;

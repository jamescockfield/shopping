import React from "react";
import Login from "components/Login";
import Register from "components/Register";
import Products from "components/Products";
import Navbar from "components/Navbar";
import Checkout from "components/Checkout";
import Favourites from "components/Favourites";
import AuthContext from "components/AuthContext";
import "css/App.scss";

const App = () => {

    const [state, setState] = React.useState({ auth: false });

    React.useEffect(() => {
        fetch("/api/auth")
            .then(res => res.json())
            .then(auth => setState({ auth }))
    });

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
            route = <><Login/><Register/></>;
            break;
        default:
            route = <Products/>;
    }

    return <AuthContext.Provider value={ state }>
        <Navbar/>
        { route }
    </AuthContext.Provider>;
};

export default App;

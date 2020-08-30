import React from "react";
import { MdFavorite, MdShoppingCart, MdExitToApp } from "react-icons/md";
import AuthContext from "components/AuthContext";

const UserPanel = () => {

    const { auth } = React.useContext(AuthContext);

    const logout = () => 
        fetch("/api/logout")
            .then(() => window.location.href = "/");


    return <div className="user-panel">
        <a href="/checkout"><MdShoppingCart/></a>
        { !auth ? 
            <a href="/login"><button>Login</button></a> :
            <>
                <a href="/favourites"><MdFavorite/></a>
                <a href="/" onClick={ logout }><MdExitToApp/></a>
            </>
        }
    </div>;
}

export default UserPanel;

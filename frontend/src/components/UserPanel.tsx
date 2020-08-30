import React from "react";
import { MdFavorite, MdShoppingCart, MdExitToApp } from "react-icons/md";

interface UserPanelState {
    loggedIn: boolean
}

class UserPanel extends React.Component<any, UserPanelState> {

    constructor(props: any) {
        super(props);
        this.state = {
            loggedIn: false 
        }
    }

    componentDidMount() {
        if (document.cookie.indexOf("loggedIn") > -1) {
            this.setState({ loggedIn: true });
        }
    }

    logout() {
        fetch("/api/logout")
            .then(() => window.location.href = "/");
    }

    render() {

        return <div className="user-panel">
            <a href="/checkout"><MdShoppingCart/></a>
            { !this.state.loggedIn ?
                <a href="/login"><button>Login</button></a> :
                <>
                    <a href="/favourites"><MdFavorite/></a>
                    <a href="/" onClick={ this.logout }><MdExitToApp/></a>
                </>
            }
        </div>
    }
}

export default UserPanel;

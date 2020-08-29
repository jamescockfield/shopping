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

        if (document.cookie.indexOf("session") > -1) {

            this.setState({ loggedIn: true });
        }
    }

    logout() {
    }

    render() {

        return <div className="user-panel">
            { !this.state.loggedIn ?
                <a href="/login"><button>Login</button></a> :
                <>
                    <a href="/favourites"><MdFavorite/></a>
                    <a href="/checkout"><MdShoppingCart/></a>
                    <MdExitToApp onClick={ this.logout }/>
                </>
            }
        </div>
    }
}

export default UserPanel;

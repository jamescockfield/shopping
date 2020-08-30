import React from "react";
import { MdFavorite, MdFavoriteBorder } from "react-icons/md";

interface FavouriteIconProps {
    favourite: boolean,
    guid: string
}

interface FavouriteIconState {
    favourite: boolean
}

class FavouriteIcon extends React.Component<FavouriteIconProps, FavouriteIconState> {

    constructor(props: FavouriteIconProps) {

        super(props);
        this.state = {
            favourite: props.favourite
        }
    }

    setFavourite(favourite: boolean) {

        if (document.cookie.indexOf("loggedIn") === -1) {
            window.location.href = "/login";
        }

        fetch("/api/favourite", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                guid: this.props.guid,
                favourite
            })
        })
    }

    render() {
        return this.props.favourite ?
            <MdFavorite className="favourite" onClick={ e => this.setFavourite(false) }/> :
            <MdFavoriteBorder className="favourite" onClick={ e => this.setFavourite(true) }/>;
    }
}

export default FavouriteIcon;

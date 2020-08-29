import React from "react";
import { MdFavorite, MdFavoriteBorder } from "react-icons/md";

export interface ProductProps {
    name: string,
    description: string,
    imageSrc: string,
    price: string,
    sizes: Array<string>,
    salePrice?: string,
    guid?: string,
    favourite?: boolean
}

export class Product extends React.Component<ProductProps, any> {

    setFavourite(favourite: boolean) {

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
        return <div className="product">
            { this.props.favourite ?
                <MdFavorite className="favourite" onClick={ e => this.setFavourite(false) }/> :
                <MdFavoriteBorder className="favourite" onClick={ e => this.setFavourite(true) }/>
            }
            <a href={ this.props.guid }>
                <h2>{ this.props.name }</h2>
                <img src={ this.props.imageSrc } alt={ this.props.name }/>
            </a>
            <span className="sale">{ this.props.salePrice && this.props.salePrice }</span>
            <span>{ this.props.price }</span>
        </div>;
    }
}

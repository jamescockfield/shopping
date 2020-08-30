import React from "react";
import FavouriteIcon from "components/FavouriteIcon";

export interface ProductProps {
    name: string,
    description: string,
    imageSrc: string,
    sizes: Array<string>,
    price: number,
    salePrice?: number,
    guid: string,
    favourite: boolean
}

export const Product = (props: ProductProps) =>
    <div className="product">
        <FavouriteIcon guid={props.guid} favourite={ props.favourite }/>
        <a href={ props.guid }>
            <h2>{ props.name }</h2>
            <img src={ props.imageSrc } alt={ props.name }/>
        </a>
        <span className="sale">{ props.salePrice && props.salePrice.toFixed(2) + "€" }</span>
        <span>{ props.price.toFixed(2) + "€" }</span>
    </div>;

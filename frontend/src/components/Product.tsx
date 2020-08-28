import React from 'react';

export interface ProductProps {
    name: string,
    description: string,
    imageSrc: string,
    price: string,
    sizes: Array<string>,
    salePrice?: string
}

export class Product extends React.Component<ProductProps, any> {

    render() {
        return <div className="product">
            <h2>{ this.props.name }</h2>
            <img src={ this.props.imageSrc } alt={ this.props.name }/>
            <span className="sale">{ this.props.salePrice && this.props.salePrice }</span>
            <span>{ this.props.price }</span>
        </div>;
    }
}

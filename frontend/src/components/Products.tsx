import React from 'react';
import { Product, ProductProps } from 'components/Product';

interface ProductsState {
    products: Array<ProductProps> 
}

class Products extends React.Component<any, ProductsState> {

    constructor(props: any) {
        super(props);
        this.state = {
            products: []
        };
    }

    componentDidMount() {
        fetch("/api/products")
            .then(res => res.json())
            .then(res => this.setState({ products: res }));
    }

    render() {
        return <div className="products">
            { this.state.products.map((product, index) => 
                <Product {...product} key={ index } />
            ) }
        </div>;

    }
}

export default Products;

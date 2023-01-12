import { Component, ReactNode } from 'react';

class Product extends Component {
  render(): ReactNode {
    const { product } = this.props;
    return (
      <div>
        <img alt={product.name} src={product.img} />
        <h3>{product.name}</h3>
        <p>{product.price}</p>
      </div>
    );
  }
}

export default Product;

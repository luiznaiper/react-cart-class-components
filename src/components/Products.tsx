import { Component, ReactNode } from 'react';
import Product from '../Product';

class Products extends Component {
  render(): ReactNode {
    const { products, addToCart } = this.props;
    return (
      <div>
        {products.map((product) => (
          <Product key={product.name} addToCart={addToCart} product={product} />
        ))}
      </div>
    );
  }
}

export default Products;

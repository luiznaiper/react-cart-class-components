import { Component, ReactNode } from 'react';
import Product from '../Product';

type flexDirection = 'row' | 'column';

interface stylesInline {
  products: {
    display: string;
    flexDirection: flexDirection;
    justifyContent: string;
  };
}

const styles: stylesInline = {
  products: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-beetween',
  },
};

class Products extends Component {
  render(): ReactNode {
    const { products, addToCart } = this.props;
    return (
      <div style={styles.products}>
        {products.map((product) => (
          <Product key={product.name} addToCart={addToCart} product={product} />
        ))}
      </div>
    );
  }
}

export default Products;

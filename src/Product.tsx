import { Component, ReactNode } from 'react';

interface stylesInline {
  product: {
    border: string;
    boxShadow: string;
    width: string;
    padding: string;
    borderRadius: string;
  };
  img: {
    width: string;
  };
}

const styles: stylesInline = {
  product: {
    border: '1 px solid #eee',
    boxShadow: '0 5px 5px rgba(0,0,0,0.1)',
    width: '30%',
    padding: '10px 15px',
    borderRadius: '5px',
  },
  img: {
    width: '100%',
  },
};

class Product extends Component {
  render(): ReactNode {
    const { product } = this.props;
    return (
      <div style={styles.product}>
        <img alt={product.name} src={product.img} />
        <h3>{product.name}</h3>
        <p>{product.price}</p>
      </div>
    );
  }
}

export default Product;

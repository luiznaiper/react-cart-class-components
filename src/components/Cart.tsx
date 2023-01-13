import { Component, ReactNode } from 'react';
import BubbleAlert from './BubbleAlert';

type position = 'relative' | 'absolute';

interface stylesInline {
  cart: {
    backgroundColor: string;
    color: string;
    border: string;
    padding: string;
    borderRadius: string;
    cursor: string;
  };
  bubble: {
    position: position;
    left: string;
    top: string;
  };
}

const styles: stylesInline = {
  cart: {
    backgroundColor: '#24628b',
    color: '#fff',
    border: 'none',
    padding: '15px',
    borderRadius: '15px',
    cursor: 'pointer',
  },
  bubble: {
    position: 'relative',
    left: '12px',
    top: '20px',
  },
};

class Cart extends Component {
  render(): ReactNode {
    return (
      <div>
        <span style={styles.bubble}>
          <BubbleAlert value={5} />
        </span>
        <button style={styles.cart}>Cart</button>
      </div>
    );
  }
}

export default Cart;

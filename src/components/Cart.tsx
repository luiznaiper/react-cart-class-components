import { Component, ReactNode } from 'react';
import BubbleAlert from './BubbleAlert';
import CartDetails from './CartDetails';

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
    const { cart, isCartVisible, showCart } = this.props;
    const quantity = cart.reduce((acc, el) => acc + el.quantity, 0);
    return (
      <div>
        <span style={styles.bubble}>
          {quantity !== 0 ? <BubbleAlert value={quantity} /> : null}
        </span>
        <button onClick={showCart} style={styles.cart}>
          Cart
        </button>
        {isCartVisible ? <CartDetails cart={cart} /> : null}
      </div>
    );
  }
}

export default Cart;

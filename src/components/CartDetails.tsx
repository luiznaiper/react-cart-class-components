import { Component, ReactNode } from 'react';

const styles = {
  cartDetails: {
    backgroundColor: '#fff',
    position: 'absolute',
    marginTop: 30,
    boxShadow: '1px 5px 5px rgba(0,0,0,0.3)',
    borderRadiurs: '5px',
    width: '300px',
    right: 50,
  },
  ul: {
    margin: 0,
    padding: 0,
  },
  product: {
    listStyleType: 'none',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '25px 20px',
    borderBottom: '1px solid #aaa',
  },
};

class CartDetails extends Component {
  render(): ReactNode {
    const { cart } = this.props;
    console.log(cart);
    return (
      <div style={styles.cartDetails}>
        <ul style={styles.ul}>
          {cart.map((x) => (
            <li key={x.name} style={styles.product}>
              <img alt={x.name} src={x.img} width="50" height="32" />
              {x.name} <span>{x.quantity}</span>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default CartDetails;

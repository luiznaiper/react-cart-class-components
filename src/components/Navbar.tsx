import { Component, ReactNode } from 'react';

type flexDirection = 'row' | 'column';

interface stylesInline {
  navbar: {
    display: string;
    flexDirection: flexDirection;
    alignItems: string;
    height: string;
    justifyContent: string;
    position: string;
    padding: string;
    boxShadow: string;
  };
}

const styles: stylesInline = {
  navbar: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    height: '100px',
    justifyContent: 'space-between',
    position: 'relative',
    padding: '0 50px',
    boxShadow: '0 2px 3px rgba(0,0,0, 0.1)',
  },
};

class Navbar extends Component {
  render(): ReactNode {
    return (
      <nav style={styles.navbar}>
        <p>Logo</p>
        <p>Cart</p>
      </nav>
    );
  }
}

export default Navbar;

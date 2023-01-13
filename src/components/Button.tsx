import { Component, ReactNode } from 'react';

type flexDirection = 'row' | 'column';

interface stylesInline {
  button: {
    backgroundColor: string;
    color: string;
    flexDirection: flexDirection;
    justifyContent: string;
    padding: string;
    border: string;
    borderRadius: string;
    cursor: string;
  };
}

const styles: stylesInline = {
  button: {
    backgroundColor: '#24628b',
    color: '#fff',
    flexDirection: 'row',
    justifyContent: 'space-beetween',
    padding: '15px 20px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
};

class Button extends Component {
  render(): ReactNode {
    return <button style={styles.button} {...this.props} />;
  }
}
export default Button;

import { Component, ReactNode } from 'react';

interface stylesInline {
  logo: {
    fontWeight: string;
    fontSize: string;
  };
}

const styles: stylesInline = {
  logo: {
    fontWeight: '700',
    fontSize: '2rem',
  },
};

class Logo extends Component {
  render(): ReactNode {
    return <div style={styles.logo}>Shop (No responsive)</div>;
  }
}

export default Logo;

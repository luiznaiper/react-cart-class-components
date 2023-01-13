import { Component, ReactNode } from 'react';

interface stylesInline {
  title: {
    marginBottom: string;
  };
}

const styles: stylesInline = {
  title: {
    marginBottom: '30px',
  },
};

class Title extends Component {
  render(): ReactNode {
    return <h1 style={styles.title}>Add to Cart with Class Components</h1>;
  }
}

export default Title;

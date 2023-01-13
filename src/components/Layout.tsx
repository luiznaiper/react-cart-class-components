import { Component, ReactNode } from 'react';

type flexDirection = 'row' | 'column';

interface stylesInline {
  layout: {
    backgroundColor: string;
    color: string;
    alignItems: string;
    display: string;
    flexDirection: flexDirection;
  };
  container: {
    width: string;
  };
}

const styles: stylesInline = {
  layout: {
    backgroundColor: '#fff',
    color: '#24628b',
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
  },
  container: {
    width: '1200px',
  },
};

class Layout extends Component {
  render(): ReactNode {
    return (
      <div style={styles.layout}>
        <div style={styles.container}>{this.props.children}</div>
      </div>
    );
  }
}

export default Layout;

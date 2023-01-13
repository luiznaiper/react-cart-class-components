import { Component, ReactNode } from 'react';

type valueProps = {
  value: string | number;
};

interface stylesInline {
  bubbleAlert: {
    backgroundColor: string;
    borderRadius: string;
    color: string;
    padding: string;
    fontSize: string;
    width: string;
  };
}

const styles: stylesInline = {
  bubbleAlert: {
    backgroundColor: '#e97254',
    borderRadius: '15px',
    color: '#fff',
    padding: '2px 10px',
    fontSize: '0.9rem',
    width: '20px',
  },
};

class BubbleAlert extends Component<valueProps> {
  getNumber(n: number | string): string | number {
    if (!n) {
      return ' ';
    }
    return n > 9 ? '9+' : n;
  }
  render(): ReactNode {
    const { value } = this.props;
    return <span style={styles.bubbleAlert}>{this.getNumber(value)}</span>;
  }
}

export default BubbleAlert;

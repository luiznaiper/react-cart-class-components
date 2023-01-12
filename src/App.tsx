import { Component, ReactNode } from 'react';
import Products from './components/Products';

class App extends Component {
  state = {
    products: [
      { name: 'Tomato', price: 1500, img: '../public/products/tomato.jpeg' },
      { name: 'Arbejas', price: 2500, img: '../public/products/arbejas.jpeg' },
      { name: 'Lettuce', price: 500, img: '../public/products/lettuce.jpeg' },
    ],
  };
  render(): ReactNode {
    return (
      <div>
        <Products
          addToCart={() => console.log('Nothing happens')}
          products={this.state.products}
        />
      </div>
    );
  }
}

export default App;

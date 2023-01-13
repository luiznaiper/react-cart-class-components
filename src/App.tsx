import { Component, ReactNode } from 'react';
import Products from './components/Products';
import Layout from './components/Layout';
import Title from './components/Title';
import Navbar from './components/Navbar';

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
        <Navbar />
        <Layout>
          <Title />
          <Products
            addToCart={() => console.log('Nothing happens')}
            products={this.state.products}
          />
        </Layout>
      </div>
    );
  }
}

export default App;

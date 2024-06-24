import './App.css';
import LoginPage from './components/Authentication/LoginPage';
import HomePage from './components/Home/HomePage';
import Navbar from './components/Navbar/Navbar';
import ProductsPage from './components/Products/ProductPage';
import SingleProductPage from './components/SingleProduct/SingleProductPage';

const App = () => {
  return (
    <div className='app'>
      <Navbar />
      <main>
        {/* <HomePage /> */}
        {/* <ProductsPage /> */}
        {/* <SingleProductPage /> */}
        <LoginPage />
      </main>
    </div>
  );
};

export default App;

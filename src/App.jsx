import { useEffect, useState } from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Routing from './components/Routing/Routing';
import { jwtDecode } from 'jwt-decode';

const App = () => {
  const [user, setUser] = useState(null);
  const [cart, setCart] = useState([]);

  const addToCart = (product, quantity) => {
    setCart([...cart, { product, quantity }]);
  };
  useEffect(() => {
    try {
      const jwt = localStorage.getItem('token');
      const jwtUser = jwtDecode(jwt);
      setUser(jwtUser);
      if (Date.now() >= jwtUser.exp * 1000) {
        localStorage.removeItem('token');
        location.reload();
      } else {
        setUser(jwtUser);
      }
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <div className='app'>
      <Navbar user={user} cartCount={cart.length} />
      <main>
        <Routing addToCart={addToCart} />
      </main>
    </div>
  );
};

export default App;

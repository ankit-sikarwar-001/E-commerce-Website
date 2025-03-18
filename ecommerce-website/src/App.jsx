import React, { useState } from 'react';
import Header from './components/Header';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import Footer from './components/Footer';
import Login from './components/Login';

const App = () => {
  const [cart, setCart] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showLogin, setShowLogin] = useState(false);

  const addToCart = (product) => {
    if (!isLoggedIn) {
      setShowLogin(true); // Show login modal if not logged in
      return;
    }
    setCart([...cart, product]);
  };

  const removeFromCart = (productId) => {
    setCart(cart.filter((item) => item.id !== productId));
  };

  const handleLogin = () => {
    setIsLoggedIn(true);
    setShowLogin(false);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header isLoggedIn={isLoggedIn} onLogout={handleLogout} />
      <main className="flex-grow p-4">
        <div className="container mx-auto">
          <ProductList addToCart={addToCart} isLoggedIn={isLoggedIn} />
          <Cart cart={cart} removeFromCart={removeFromCart} />
        </div>
      </main>
      <Footer />
      {showLogin && <Login onLogin={handleLogin} />}
    </div>
  );
};
export default App;
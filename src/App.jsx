import NavBar from './Components/Navbar';
import { Outlet } from 'react-router-dom';
import { useState, useEffect } from 'react';

const App = () => {
  const [cart, setCart] = useState([]);
  const handleAddToCart = (name, image, price, description, quantity) => {
    const newItem = {
      key: name,
      name,
      image,
      price,
      description,
      quantity,
    };
    setCart((prevCart) => [...prevCart, newItem]);
  };
  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    try {
      const response = await fetch('https://fakestoreapi.com/products?limit=4');
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      const products = await response.json();
      console.log(products);
      return products;
    } catch (error) {
      console.error('Error fetching data:', error.message);
    }
  };

  useEffect(() => {
    getProducts().then((results) => setProducts(results));
  }, []);

  return (
    <>
      <NavBar cart={cart} />
      <Outlet
        context={{
          cart: [cart, setCart],
          handleAddToCart: handleAddToCart,
          products: products,
        }}
      />
    </>
  );
};

export default App;

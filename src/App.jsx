import NavBar from './Components/Navbar';
import { Outlet } from 'react-router-dom';
import { useState } from 'react';

const App = () => {
  const [cart, setCart] = useState([]);
  const handleAddToCart = (name, image, price, description, quantity) => {
		const newItem = {
			key: name,
			name,
			image,
			price,
			description,
			quantity
		}
		setCart(prevCart => [...prevCart, newItem]);
	};

  return (
    <>
      <NavBar cart={cart} />
      <Outlet context={{
				cart: [cart, setCart],
				handleAddToCart: handleAddToCart
				}}
				 />
    </>
  );
};

export default App;

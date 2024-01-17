import NavBar from './Components/Navbar';
import { Outlet } from 'react-router-dom';
import { useState } from 'react';

const App = () => {
	const [cart, setCart] = useState([1, 3]);

	return (
		<>
			<NavBar cart={cart} />
			<Outlet context={[cart, setCart]} />
		</>
	);
};

export default App;

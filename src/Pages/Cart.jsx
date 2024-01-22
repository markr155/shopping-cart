import { useOutletContext } from 'react-router-dom';

const Cart = () => {
	const [cart, setCart] = useOutletContext();
	return (
		<>
			<h1>Cart Page</h1>
			<p>Number of current items: {cart.length}</p>
			{cart.map((item, index) => (item ? <p key={index}>{item}</p> : null))}
		</>
	);
};

export default Cart;

import { useOutletContext } from 'react-router-dom';

const Cart = () => {
	const [cart, setCart] = useOutletContext().cart;

	return (
		<>
			<h1>Cart Page</h1>
			<p>Number of items in cart: {cart.length}</p>
			{cart.map((item) =>
				item ? (
					<div key={item.key}>
						<p>{item.name}</p>
						<p>Price: {item.price}</p>
						<p>Quantity: {item.quantity}</p>
					</div>
				) : null
			)}
		</>
	);
};

export default Cart;

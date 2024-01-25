import { useOutletContext } from 'react-router-dom';
import PropTypes from 'prop-types';

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

Cart.propTypes = {
  cart: PropTypes.array.isRequired,
};

export default Cart;

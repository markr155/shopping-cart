import { useState } from 'react';
const ProductCard = ({ name, img, price, description, handleAddToCart }) => {
  const [productQuantity, setProductQuantity] = useState(0);

  const incrementProductNum = (isAdding) => {
    isAdding
      ? setProductQuantity((quantity) => quantity + 1)
      : setProductQuantity((quantity) => {
				if (quantity === 0) return quantity
				return quantity - 1});
  };

  return (
    <>
      <div>
        <img src={`${img}`} alt={`${name}`} />
        <h3>{name}</h3>
        <p>{price}</p>
        <p>{description}</p>
        <div>
          <button onClick={() => incrementProductNum(false)}>-</button>
          <input
            type='number'
            value={productQuantity}
            onChange={(e) => setProductQuantity(parseInt(e.target.value))}
          />
          <button onClick={() => incrementProductNum(true)}>+</button>
        </div>
				<button onClick={() => handleAddToCart(name, img, price, description, productQuantity)}>Add to Cart</button>
      </div>
    </>
  );
};

export default ProductCard;

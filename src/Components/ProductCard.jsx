import { useState } from 'react';
const ProductCard = ({ name, img, price, description }) => {
	const [productNum, setProductNum] = useState(0);

	const incrementProductNum = (isAdding) => {
		isAdding
			? setProductNum((productNum) => productNum + 1)
			: setProductNum((productNum) => productNum - 1);
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
						value={productNum}
						onChange={(e) => setProductNum(parseInt(e.target.value))}
					/>
					<button onClick={() => incrementProductNum(true)}>+</button>
				</div>
			</div>
		</>
	);
};

export default ProductCard;

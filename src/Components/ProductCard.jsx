const ProductCard = ({ name, img, price, description }) => {
	return (
		<>
			<div>
				<img src={`${img}`} alt={`${name}`} />
				<h3>{name}</h3>
				<p>{price}</p>
				<p>{description}</p>
			</div>
		</>
	);
};

export default ProductCard;

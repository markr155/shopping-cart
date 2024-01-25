import { useState } from 'react';
import styled from 'styled-components';

const CardContainer = styled.div`
	display: flex;
	width: 600px;
	aspect-ratio: 1.5/1;
	border: 2px solid black;
	border-radius: 5px;
	text-align: cen32eeeee8ter;
	justify-content: center;
	margin: 1rem;
	@media (max-width: 768px) {
		width: 400px;
		font-size: 1rem;
		margin: 0.5rem;
	}
`;

const CardLeft = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
`;

const IncrementButton = styled.button`
	min-width: 40px;
	margin: 1rem 0;
`;

const AddCartButton = styled.button`
	min-width: 115px;
	align-self: center;
	margin: 1rem 0;
	padding: 8px 0;
`;

const CardRight = styled.div`
	padding: 0 1rem;
	display: flex;
	flex-direction: column;
	justify-content: center;
	text-align: center;
	@media (max-width: 768px) {
		padding: 0;
		& * {
			padding: 0;
			margin: 0.25rem 0;
			font-size: 0.8rem;
		}
	}
`;

const Image = styled.img`
	width: 300px;
	height: 300px;
	@media (max-width: 768px) {
		width: 150px;
		height: 150px;
	}
	object-fit: contain;
`;

const QuantityInput = styled.input`
	text-align: center;
	max-width: 40px;
	-moz-appearance: textfield;
	&::-webkit-scrollbar {
		-webkit-appearance: none;
	}
`;

const ProductCard = ({ name, img, price, description, handleAddToCart }) => {
	const [productQuantity, setProductQuantity] = useState(0);

	const incrementProductNum = (isAdding) => {
		isAdding
			? setProductQuantity((quantity) => quantity + 1)
			: setProductQuantity((quantity) => {
					if (quantity === 0) return quantity;
					return quantity - 1;
				});
	};

	return (
		<>
			<CardContainer>
				<CardLeft>
					<Image src={`${img}`} alt={`${name}`}></Image>
				</CardLeft>
				<CardRight>
					<h3>{name}</h3>
					<p>${price}</p>
					<div>
						<IncrementButton onClick={() => incrementProductNum(false)}>
							-
						</IncrementButton>
						<QuantityInput
							type='number'
							value={productQuantity}
							onChange={(e) => setProductQuantity(parseInt(e.target.value))}
						/>
						<IncrementButton onClick={() => incrementProductNum(true)}>
							+
						</IncrementButton>
					</div>
					<AddCartButton
						onClick={() => {
							if (productQuantity <= 0) return;
							setProductQuantity(0);
							return handleAddToCart(
								name,
								img,
								price,
								description,
								productQuantity
							);
						}}
					>
						Add to Cart
					</AddCartButton>
				</CardRight>
			</CardContainer>
		</>
	);
};

export default ProductCard;

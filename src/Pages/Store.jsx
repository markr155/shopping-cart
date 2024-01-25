import { useOutletContext } from 'react-router-dom';
import ProductCard from '../Components/ProductCard';
import styled from 'styled-components';

const ProductsContainer = styled.div`
	display: flex;
	flex-wrap: wrap;
	align-items: center;
	justify-content: center;
	
`;

const Store = () => {
	const [cart, setCart] = useOutletContext().cart;
	const handleAddToCart = useOutletContext().handleAddToCart;
	const products = useOutletContext().products;

	return (
		<>
			<ProductsContainer>
				{products &&
					products.map((product) => {
						return (
							<ProductCard
								key={product.id}
								name={product.title}
								img={product.image}
								price={product.price}
								description={product.description}
								handleAddToCart={handleAddToCart}
							/>
						);
					})}
			</ProductsContainer>
		</>
	);
};

export default Store;

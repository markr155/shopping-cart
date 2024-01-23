// product cards
// Name
// img
// Price
// descripion
// minus|num|plus - Add to Cart btn
import { render, screen } from '@testing-library/react';
import ProductCard from '../src/Components/ProductCard';
import { beforeAll } from 'vitest';

describe('Product card renders each element', () => {
	beforeAll(() => {
		render(
			<ProductCard
				name={'name'}
				img={'/'}
				price={'100'}
				description={'description'}
			/>
		);
	});
	it('Name of product rendered', () => {
		expect(screen.getByText('name')).toBeInDocument();
	});
});

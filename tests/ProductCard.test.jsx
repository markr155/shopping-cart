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
	beforeEach(() => {
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
		expect(screen.queryByText('name')).toBeInTheDocument();
	});
	it('Image rendered', () => {
		expect(screen.queryByAltText('name')).toBeInTheDocument();
	});
	it('Price rendered', () => {
		expect(screen.queryByText('100')).toBeInTheDocument();
	});
	it('Description rendered', () => {
		expect(screen.queryByText('description')).toBeInTheDocument();
	})
});

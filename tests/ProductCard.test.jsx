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
	});
	it('Decrement product number button rendered', () => {
		expect(screen.queryByText('-')).toBeInTheDocument();
	});
	it('Increment product number button rendered', () => {
		expect(screen.queryByText('+')).toBeInTheDocument();
	});
	it('Number field rendered', () => {
		expect(screen.queryByRole('input')).toBeInTheDocument();
	})
});

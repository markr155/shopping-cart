import { render, screen } from '@testing-library/react';
import ProductCard from '../src/Components/ProductCard';
import { beforeAll, expect, it } from 'vitest';
import userEvent from '@testing-library/user-event';

describe('Product card renders each element', () => {
	beforeEach(() => {
		render(
			<ProductCard
				name={'name'}
				img={'/'}
				price={'100'}
				description={'description'}
				handleAddToCart={() => vi.fn()}
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
		expect(screen.queryByDisplayValue('0')).toBeInTheDocument();
	});
	it('Add to cart button rendered', () => {
		expect(
			screen.queryByRole('button', { name: 'Add to Cart' })
		).toBeInTheDocument();
	});
});

describe('Buttons function as expected', () => {
	it('Increment button increases number field by 1', async () => {
		render(
			<ProductCard
				name={'name'}
				img={'/'}
				price={'100'}
				description={'description'}
				handleAddToCart={() => vi.fn()}
			/>
		);
		const user = userEvent.setup();
		const inputField = screen.queryByDisplayValue('0');
		const button = screen.getByRole('button', { name: '+' });

		await user.click(button);
		expect(inputField.value).toMatch('1');
	});
	it('Decrement button decreases number field by 1', async () => {
		render(
			<ProductCard
				name={'name'}
				img={'/'}
				price={'100'}
				description={'description'}
				handleAddToCart={() => vi.fn()}
			/>
		);
		const user = userEvent.setup();
		const inputField = screen.queryByDisplayValue('0');
		const plusButton = screen.getByRole('button', { name: '+' });
		const minusButton = screen.getByRole('button', { name: '-' });

		await user.click(plusButton);
		await user.click(minusButton);
		expect(inputField.value).toMatch('0');
	});
	it('Decrement button doesnt go negative', async () => {
		render(
			<ProductCard
				name={'name'}
				img={'/'}
				price={'100'}
				description={'description'}
				handleAddToCart={() => vi.fn()}
			/>
		);
		const user = userEvent.setup();
		const inputField = screen.queryByDisplayValue('0');
		const minusButton = screen.getByRole('button', { name: '-' });

		await user.click(minusButton);
		expect(inputField.value).toMatch('0');
	});
	it('Clicking add to cart calls handleAddToCart when quantity > 0', async () => {
		const handleAddToCart = vi.fn();
		render(
			<ProductCard
				name={'name'}
				img={'/'}
				price={'100'}
				description={'description'}
				handleAddToCart={handleAddToCart}
			/>
		);
		const user = userEvent.setup();
		const plusButton = screen.getByRole('button', { name: '+' });
		const addCartButton = screen.getByRole('button', { name: 'Add to Cart' });

		await user.click(plusButton);
		await user.click(addCartButton);

		expect(handleAddToCart).toBeCalled();
	});
	it('If quantity is 0, handleAddToCart not called', async () => {
		const handleAddToCart = vi.fn();
		render(
			<ProductCard
				name={'name'}
				img={'/'}
				price={'100'}
				description={'description'}
				handleAddToCart={handleAddToCart}
			/>
		);

		const user = userEvent.setup();
		const inputField = screen.queryByDisplayValue('0');
		const addCartButton = screen.getByRole('button', { name: 'Add to Cart' });

		await user.click(addCartButton);

		expect(handleAddToCart).not.toBeCalled();
	});

	it('Quantity value chages to 0 once add to cart clicked', async () => {
		const handleAddToCart = vi.fn();
		render(
			<ProductCard
				name={'name'}
				img={'/'}
				price={'100'}
				description={'description'}
				handleAddToCart={handleAddToCart}
			/>
		);

		const user = userEvent.setup();
		const inputField = screen.queryByDisplayValue('0');
		const plusButton = screen.getByRole('button', { name: '+' });
		const addCartButton = screen.getByRole('button', { name: 'Add to Cart' });

		await user.click(plusButton);
		await user.click(addCartButton);
		expect(inputField.value).toMatch('0');
	});
});

import NavBar from '../src/Components/Navbar';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

describe('NavBar renders', () => {
	const { container } = render(<NavBar cart={[]} />, {
		wrapper: BrowserRouter,
	});
	it('renders elements', () => {
		expect(container).toMatchSnapshot();
	});
});

describe('Number of cart items renders correctly', () => {
	it('Cart number is hidden', () => {
		const { container } = render(<NavBar cart={[]} />, {
			wrapper: BrowserRouter,
		});
		expect(screen.queryByText('Cart')).toBeInTheDocument();
	});

	it('Cart shows 1 with a single item', () => {
		render(<NavBar cart={[1]} />, { wrapper: BrowserRouter });
		screen.queryByText('Cart(1)');
	});

	it('Cart shows number greater than 1', () => {
		render(<NavBar cart={[1, 2, 3]} />, { wrapper: BrowserRouter });
		screen.queryByText('Cart(3)');
	});
});

import App from '../src/App';
import NavBar from '../src/Components/Navbar';
import { BrowserRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import Home from '../src/Pages/Home';
import { it } from 'vitest';

describe('Default page loads', () => {
	it('NavBar renders', () => {
		const { container } = render(<NavBar cart={[]} />, {
			wrapper: BrowserRouter,
		});
		expect(container).toMatchSnapshot();
	});

	it('Home renders', () => {
		const { container } = render(<Home />, { wrapper: BrowserRouter });
		expect(container).toMatchSnapshot();
	});
});

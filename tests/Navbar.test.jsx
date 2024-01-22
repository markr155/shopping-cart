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

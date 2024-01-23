import About from '../src/Pages/About';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

describe('About renders', () => {
	const { container } = render(<About />, {
		wrapper: BrowserRouter,
	});
	it('renders elements', () => {
		expect(container).toMatchSnapshot();
	});
});

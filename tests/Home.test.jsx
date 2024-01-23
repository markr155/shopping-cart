import Home from '../src/Pages/Home.jsx';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { beforeEach } from 'vitest';

describe('Home Page renders elements', () => {
  beforeEach(() => {
    render(<Home />, { wrapper: BrowserRouter });
  })

	it('Image renders', () => {
		expect(screen.getByRole('img'), {name: 'Shop image'}).toBeInTheDocument();
	});
  it('Shop Button renders', () => {
    expect(screen.getByRole('button', {name: 'Shop Now'})).toBeInTheDocument();
  })
});

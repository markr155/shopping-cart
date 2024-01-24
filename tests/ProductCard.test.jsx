import { render, screen } from '@testing-library/react';
import ProductCard from '../src/Components/ProductCard';
import { beforeAll } from 'vitest';
import userEvent from '@testing-library/user-event';

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
    expect(screen.queryByDisplayValue('0')).toBeInTheDocument();
  });
  it('Add to cart button rendered', () => {
    expect(
      screen.queryByRole('button', { name: 'Add to Cart' })
    ).toBeInTheDocument();
  });
  it('Increment button increases number field by 1', async () => {
    const user = userEvent.setup();
    const inputField = screen.queryByDisplayValue('0');
    const button = screen.getByRole('button', { name: '+' });

    await user.click(button);
    expect(inputField.value).toMatch('1');
  });
  it('Decrement button decreases number field by 1', async () => {
    const user = userEvent.setup();
    const inputField = screen.queryByDisplayValue('0');
    const plusButton = screen.getByRole('button', { name: '+' });
    const minusButton = screen.getByRole('button', { name: '-' });

    await user.click(plusButton);
    await user.click(minusButton);
    expect(inputField.value).toMatch('0');
  });
  it('Decrement button doesnt go negative', async () => {
    const user = userEvent.setup();
    const inputField = screen.queryByDisplayValue('0');
    const minusButton = screen.getByRole('button', { name: '-' });

    await user.click(minusButton);
    expect(inputField.value).toMatch('0');
  });
});

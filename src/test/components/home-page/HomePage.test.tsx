import React from 'react';
import { render, screen } from '@testing-library/react';
import HomePage from '../../../components/home-page/HomePage';

test('renders text passed by props', () => {
  render(<HomePage name='test' />);
  const textInComponent = screen.getByText(/test/i);
  expect(textInComponent).toBeInTheDocument();
});

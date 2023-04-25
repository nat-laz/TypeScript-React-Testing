import React from 'react';
import { render, screen } from '@testing-library/react';
import Person from './Person';

//Basic component testing

test('renders a name', () => {
  render(<Person name='Joe Doe'/>);
  const linkElement = screen.getByText(/Name is Joe Doe/i);
  expect(linkElement).toBeInTheDocument();
});

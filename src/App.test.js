import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  const { debug, getAllByText } = render(<App />);
  expect(getAllByText('Home')).toHaveLength = 0;
  // debug()
});

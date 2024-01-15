import React from 'react';
import { render, screen } from '@testing-library/react';
import { Description } from './index';

const testDescription = 'This is a test description.';

test('Description Component', () => {
  render(<Description description={testDescription} />);

  expect(screen.getByRole('heading', { name: /description/i })).toBeInTheDocument();
  expect(screen.getByText(testDescription)).toBeInTheDocument();
});
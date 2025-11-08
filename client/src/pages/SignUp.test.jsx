import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import SignUp from './SignUp';

test('renders sign up page', () => {
  render(
    <BrowserRouter>
      <SignUp />
    </BrowserRouter>
  );
  const heading = screen.getByRole('heading', { name: /create account/i });
  expect(heading).toBeInTheDocument();
});

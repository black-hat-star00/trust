import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import AddNewMedication from './AddNewMedication';

test('renders add new medication page', () => {
  render(
    <BrowserRouter>
      <AddNewMedication />
    </BrowserRouter>
  );
  const heading = screen.getByRole('heading', { name: /add new medication/i });
  expect(heading).toBeInTheDocument();
});

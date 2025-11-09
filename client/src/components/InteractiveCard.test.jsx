import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import InteractiveCard from './InteractiveCard';

test('renders interactive card and expands on click', () => {
  const summary = <div>Summary</div>;
  const details = <div>Details</div>;

  render(
    <BrowserRouter>
      <InteractiveCard summary={summary} details={details} />
    </BrowserRouter>
  );

  const summaryElement = screen.getByText(/summary/i);
  expect(summaryElement).toBeInTheDocument();

  fireEvent.click(summaryElement);

  const detailsElement = screen.getByText(/details/i);
  expect(detailsElement).toBeInTheDocument();
});

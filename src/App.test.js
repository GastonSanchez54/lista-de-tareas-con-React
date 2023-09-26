import { render, screen } from '@testing-library/react';
import App from "./App.1";

test('renders Learn React link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Learn React/i);

  expect(linkElement).toBeInTheDocument();
});

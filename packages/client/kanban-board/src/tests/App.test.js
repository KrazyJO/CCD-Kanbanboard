import { render, screen } from '@testing-library/react';
import App from '../App';

import '@testing-library/jest-dom';


import {server} from '../mocks/server.js'


beforeAll(() => server.listen())
// if you need to add a handler after calling setupServer for some specific test
// this will remove that handler for the rest of them
// (which is important for test isolation):
afterEach(() => server.resetHandlers())
afterAll(() => server.close())


test('Fetching the Boarddata', async () => {
  render(<App />);
  // await needed to wait for fetching data
  await screen.findByText(/Ticket Text/i);
  expect(screen.getByDisplayValue('Test Do Text')).toBeInTheDocument();

});

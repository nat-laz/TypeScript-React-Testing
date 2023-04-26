import React from 'react';
import { rest } from 'msw'
import { setupServer } from 'msw/node'
import { render, screen, waitFor } from '@testing-library/react';
import { APIComponent } from './APIComponent';

const server = setupServer(
    // Describe the requests to mock.
    rest.get('/api', (req, res, ctx) => {
      return res(
        ctx.json({
          name: 'J. R. R. Tolkien',
        }),
      )
    }),
  )
  beforeAll(() => {
    // Establish requests interception layer before all tests.
    server.listen()
  })
  afterAll(() => {
    // Clean up after all tests are done, preventing this
    // interception layer from affecting irrelevant tests.
    server.close()
  })

  
// Async hooks  testing

test('gets the data',async () => {
    render(<APIComponent/>)

    const divElement = await waitFor(() => screen.getByRole('contentinfo'));

    expect(divElement).toHaveTextContent('Name is J. R. R. Tolkien');
});

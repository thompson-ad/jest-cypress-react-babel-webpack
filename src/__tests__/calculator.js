// import '@testing-library/jest-dom/extend-expect'
// import * as jestDOM from '@testing-library/jest-dom'
import React from 'react'
import {render, fireEvent} from '@testing-library/react'
import Calculator from '../calculator'

// This adds a bunch of new assertions for us, .toHaveTextContent being one of them
// expect.extend(jestDOM)

test('the clear button switches from AC to C when there is an entry', () => {
  const {getByText} = render(<Calculator />)
  const clearButton = getByText('AC')

  fireEvent.click(getByText(/3/))
  // toHaveTextContent will give us a better error message than toBe
  expect(clearButton).toHaveTextContent('C')

  fireEvent.click(clearButton)
  expect(clearButton).toHaveTextContent('AC')
})

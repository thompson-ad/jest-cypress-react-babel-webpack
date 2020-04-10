import React from 'react'
import {render} from '@testing-library/react'
import CalculatorDisplay from '../calculator-display'

test('renders', () => {
  // container is a DOM node
  const {container} = render(<CalculatorDisplay value="0" />)
  console.log(container.innerHTML)
  // automatically formatted into nice html
  // note that with inline snapshot you must have prettier
  expect(container).toMatchInlineSnapshot(`
    <div>
      <div
        class="css-lq9ahq-calculator-display--CalculatorDisplay"
      >
        <div
          class="autoScalingText"
          data-testid="total"
          style="transform: scale(1,1);"
        >
          0
        </div>
      </div>
    </div>
  `)
})

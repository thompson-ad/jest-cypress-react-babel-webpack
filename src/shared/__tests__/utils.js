import {getFormattedValue} from '../utils'

// this test verifies that it does actually format a value
test('formats the value', () => {
  expect(getFormattedValue('1234.0')).toBe('1,234.0')
})

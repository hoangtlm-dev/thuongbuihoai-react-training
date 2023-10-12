import { render, fireEvent } from '@testing-library/react';
import ExampleCounterStore, { useCounterStore } from '../CounterStore';

test('increment and decrement functions work correctly', () => {
  const { getByText } = render(<ExampleCounterStore />);
  const incrementButton = getByText('Increment');
  const decrementButton = getByText('Decrement');

  expect(useCounterStore.getState().count).toBe(0);

  fireEvent.click(incrementButton);
  expect(useCounterStore.getState().count).toBe(1);

  fireEvent.click(decrementButton);
  expect(useCounterStore.getState().count).toBe(0);
});

import { memo } from 'react';

// Components
import {
  Button,
  ButtonType,
  Input
} from '@components/common';

// Styles
import './counter.css';

interface CounterProps {
  value: number;
  onIncrement: () => void;
  onDecrement: () => void;
};

const Counter = ({
  value,
  onIncrement,
  onDecrement
}: CounterProps) => {
  const isDisable = value === 1;

  return (
    <div data-testid='counter' className='counter'>
      <Button
        ariaLabel='Decrement'
        type={ButtonType.btnIconPrimary}
        className={isDisable ? 'counter-minus-disable' : 'counter-minus'}
        disable={isDisable}
        onClick={onDecrement}
      />
      <Input type='number' classNameInput='counter-input' value={value} />
      <Button
        ariaLabel='Increment'
        type={ButtonType.btnIconPrimary}
        className='counter-plus'
        onClick={onIncrement}
      />
    </div>
  );
}

export default memo(Counter);

import React, { memo } from 'react';

// Styles
import './input.css';

export enum InputType {
  default = '',
  info = 'info',
  error = 'error'
}

export enum InputTheme {
  default = '',
  info = 'info',
  error = 'error'
}

interface IconProps {
  id?: string;
  name?: string;
  hidden?: boolean;
  checked?: boolean;
  value?: string | number;
  label?: string;
  type?: string;
  style?: string;
  theme?: string;
  placeholder?: string;
  classNameInput?: string;
  classNameLabel?: string;
  className?: string;
}

const Input: React.FC<IconProps> = ({
  id = '',
  name = '',
  hidden = false,
  checked = false,
  value,
  label = '',
  type = '',
  theme = InputTheme.default,
  style = InputType.default,
  placeholder = '',
  classNameInput = 'input',
  classNameLabel = 'label',
  className = ''
}) => (
  <>
    {label ? (
      <div data-testId='input-value' className='input-wrapper'>
        <label className={`${classNameLabel} label-${theme}`}>{label}</label>
        <input
          id={id}
          name={name}
          hidden={hidden}
          checked={checked}
          value={value}
          placeholder={placeholder}
          aria-hidden='true'
          className={`${classNameInput} input-${style}`}
        />
      </div>
    ) : (
      <input
        data-testId='input'
        id={id}
        name={name}
        hidden={hidden}
        defaultChecked={checked}
        type={type}
        value={value}
        placeholder={placeholder}
        aria-hidden='true'
        className={className}
      />
    )}
  </>
);

export default memo(Input);

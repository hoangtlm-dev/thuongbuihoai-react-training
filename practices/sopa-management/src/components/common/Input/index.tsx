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
  htmlFor?: string;
  classNameInput?: string;
  classNameLabel?: string;
  className?: string;
  onChange?: () => void;
  onBlur?: () => void;
}

const Input = React.forwardRef<HTMLInputElement, IconProps>(
  (
    {
      id = '',
      name = '',
      hidden = false,
      checked = false,
      value,
      label = '',
      type = '',
      theme = InputTheme.default,
      style = InputType.default,
      htmlFor = '',
      classNameInput = 'input',
      classNameLabel = 'label',
      className = '',
      onChange = () => {},
      onBlur = () => {}
    },
    ref
  ) => (
    <>
      {label ? (
        <div data-testid='input-value' className='input-wrapper'>
          <label
            htmlFor={htmlFor}
            className={`${classNameLabel} label-${theme}`}
          >
            {label}
          </label>
          <input
            id={id}
            ref={ref}
            name={name}
            type={type}
            className={`${classNameInput} input-${style}`}
            onChange={onChange}
            onBlur={onBlur}
          />
        </div>
      ) : (
        <input
          data-testid='input'
          id={id}
          name={name}
          hidden={hidden}
          defaultChecked={checked}
          type={type}
          value={value}
          aria-hidden='true'
          className={`${className} ${classNameInput} input-${style}`}
        />
      )}
    </>
  )
);

export default memo(Input);

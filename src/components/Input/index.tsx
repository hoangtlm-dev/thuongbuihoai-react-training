import React, { ChangeEventHandler, memo, MouseEventHandler, useCallback, useContext } from 'react';
import styles from './input.module.css';
import { ProductContext } from '../../contexts/ProductContext';
import debounce from '../../helpers/debounce';

export enum InputType {
  primary = 'primary',
  secondary = 'secondary'
}

interface InputProps {
  type?: string;
  value?: string;
  key?: string;
  styleInput?: string;
  className?: string;
  placeholder: string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  onClick?: MouseEventHandler<HTMLInputElement>;
  onBlur?: ChangeEventHandler<HTMLInputElement>;
}

const Input: React.FC<InputProps> = ({
  type = '',
  key = '',
  value = '',
  styleInput = '',
  className = '',
  placeholder = '',
  onClick = () => {},
  onChange = () => {},
  onBlur = () => {}
}) => {
  return (
    <input
      data-testid='input-value'
      key={key}
      value={value}
      className={`${className} ${styles[`input-${styleInput}`]}`}
      type={type}
      placeholder={placeholder}
      onChange={onChange}
      onClick={onClick}
      onBlur={onBlur}
    />
  );
};

export default memo(Input);

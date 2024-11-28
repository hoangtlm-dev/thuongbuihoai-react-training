import {
  ButtonHTMLAttributes,
  memo
} from 'react';

// Styles
import './button.css';

export enum ButtonType {
  default = '',
  primary = 'primary',
  secondary = 'secondary',
  tertiary = 'tertiary',
  btnIconPrimary = 'icon-primary',
  btnIconSecondary = 'icon-secondary',
  btnOutlinePrimary = 'out-line-primary',
  btnOutlineSecondary = 'out-line-secondary',
}

interface ButtonProps {
  ariaLabel?: string;
  children?: string | JSX.Element;
  type?: ButtonType;
  disable?: boolean;
  submit?: ButtonHTMLAttributes<HTMLButtonElement>['type'];
  className?: string;
  onClick?: () => void;
  onSubmit?: () => void;
}

const Button = ({
  ariaLabel = '',
  children = '',
  type = ButtonType.default,
  disable = false,
  submit,
  className = '',
  onClick,
  onSubmit
}: ButtonProps) => (
  <button
    data-testid='button'
    aria-label={ariaLabel}
    className={`${className} btn btn-${type}`}
    disabled={disable}
    type={submit}
    onClick={onClick}
    onSubmit={onSubmit}
  >
    {children}
  </button>
);

export default memo(Button);

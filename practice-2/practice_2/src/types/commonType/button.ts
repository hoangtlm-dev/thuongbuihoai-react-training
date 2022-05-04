export interface ButtonProps {
  isHide?: boolean;
  value: string | JSX.Element;
  className?: string;
  onClick?: () => void;
  hideModal?: () => void; 
}
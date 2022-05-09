export interface ButtonProps {
  isHide?: boolean;
  text: string | JSX.Element;
  className?: string;
  onClick?: () => void;
  hideModal?: () => void; 
}
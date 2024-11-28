import { Link } from 'react-router-dom';

// Styles
import './menu.css';

export type MenuType = {
  key: string;
  label: string;
};

export enum MenuTheme {
  default = '',
  vertical = 'vertical',
  horizontal = 'horizontal'
}

export interface MenuProps {
  menuList: MenuType[];
  value?: string;
  type?: string;
  className?: string;
}

const Menu = ({
    menuList,
    value,
    type,
    className
  }: MenuProps) => (
  <div data-testid='menu' className='menu'>
    <ul className={`${className} menu-list-${type}`}>
      {MenuTheme.vertical && (
        <li className={`menu-main-${type}`}>{value}</li>
      )}
      {menuList.map((item) => (
        <li className={`${className} menu-item-${type}`} key={item.key}>
          <Link to='#' aria-label={item.label}>{item.label}</Link>
        </li>
      ))}
    </ul>
  </div>
)

export default Menu;

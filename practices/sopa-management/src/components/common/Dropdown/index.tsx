import {
  memo,
  useCallback,
  useState
} from 'react';
import { Link } from 'react-router-dom';

// Components
import { Text } from '@components/common';

// Styles
import './dropdown.css';

export type SizeType = {
  key?: string;
  label?: string;
};

export type UserType = {
  key?: string;
  label?: string;
  href: string;
};

interface DropdownProps {
  data?: SizeType[];
  value?: string;
  isHref?: boolean;
  className?: string;
  onClick?: () => void;
  onSetValue?: (value?: string) => void;
}

const Dropdown = ({
  data = [],
  isHref,
  value,
  className = '',
  onClick,
  onSetValue = () => {}
}: DropdownProps) => {
  const [openDropdown, setOpenDropdown] = useState<boolean>(false);

  const handleToggle = useCallback(() => {
    setOpenDropdown(!openDropdown);
  }, [openDropdown]);

  return (
    <div
      data-testid='dropdown'
      className={`${className} custom-dropdown`}
      onClick={handleToggle}
    >
      {isHref ? (
        <Link
          to='/login'
          className='dropdown-link'
          aria-label='link to login page'
          onClick={onClick}
        >
          Logout
        </Link>
      ) : (
        <>
          <Text text={value} className='dropdown-label' />
          {openDropdown && (
            <ul className='dropdown-list'>
              {data.map((item: SizeType) => (
                <li
                  id='my-dropdown'
                  key={item.key}
                  value={item.label}
                  className='dropdown-option'
                  onClick={() => onSetValue(item.label)}
                >
                  {item.label}
                </li>
              ))}
            </ul>
          )}
        </>
      )}
    </div>
  );
};
export default memo(Dropdown);

import {
  memo,
  useCallback,
  useState
} from 'react';
import { useNavigate } from 'react-router-dom';
import { shallow } from 'zustand/shallow';

// Components
import {
  Button,
  ButtonType,
  Dropdown,
  Icon,
  IconType
} from '@components/common';

// Constants
import { useAuthenticationStore } from '@stores/login';

interface LogoutProps {
  className?: string;
}

const Logout = ({ className = '' }: LogoutProps) => {
  const navigate = useNavigate();

  const [logout] = useAuthenticationStore(
    (state) => [
      state.logout,
    ],
    shallow
  );

  const [showDropdown, setShowDropdown] = useState<boolean>(false);

  const handleToggle = useCallback(() => {
    setShowDropdown(!showDropdown);
  }, [showDropdown]);

  const handleLogout = () => {
    useAuthenticationStore.persist.clearStorage();
    logout();
    navigate('/login');
  };

  const handleToggleItem = useCallback(() => {
    handleToggle();
    handleLogout();
  }, [showDropdown]);

  return (
    <div className={`${className} account`} data-testid='logout'>
      <Button
        ariaLabel='User'
        children={<Icon iconName={IconType.user} />}
        type={ButtonType.btnIconPrimary}
        onClick={handleToggle}
      />
      {showDropdown && (
        <Dropdown
          isHref
          className='account-dropdown'
          onClick={handleToggleItem}
        />
      )}
    </div>
  );
};

export default memo(Logout);

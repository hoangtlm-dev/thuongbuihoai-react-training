import { memo } from 'react';

// Components
import {
  Button,
  ButtonType,
  Image,
  Menu,
  MenuTheme,
  Social,
  Text,
  ThemeType
} from '@components/common';

// Constants
import {
  MENU_EVERYTHING_ELSE,
  MENU_PRODUCTS,
  MENU_SUPPORT
} from '@constants/common';
import { IMAGE } from '@constants/image';

// Styles
import './footer.css';

const Footer = () => (
  <div data-testid='footer' className='footer'>
    <div className='footer-content'>
      <div className='footer-email'>
        <Image
          href='/'
          url={IMAGE.whiteLogo}
          alt={IMAGE.whiteLogo}
          width={180}
          height={36}
        />
        <Text
          text='Stay informed about Sopa with our latest releases and founder news.'
          type={ThemeType.light}
          className='footer-text'
        />
        <Button
          ariaLabel='Enter email here for updates'
          children='Enter email here for updates'
          type={ButtonType.btnOutlineSecondary}
        />
      </div>
      <Menu
        value='Products'
        menuList={MENU_PRODUCTS}
        type={MenuTheme.vertical}
      />
      <Menu value='Support' menuList={MENU_SUPPORT} type={MenuTheme.vertical} />
      <Menu
        value='Everything Else'
        menuList={MENU_EVERYTHING_ELSE}
        type={MenuTheme.vertical}
      />
      <div className='footer-social'>
        <Social />
      </div>
    </div>
  </div>
);

export default memo(Footer);

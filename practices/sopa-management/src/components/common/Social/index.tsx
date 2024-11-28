import { Link } from 'react-router-dom';

// Components
import {
  Icon,
  IconType,
  Text,
  ThemeType
} from '@components/common';

// Styles
import './social.css';

const Social = () => (
  <ul data-testid='social' className='social-list'>
    <li className='social-item'>
      <Link
        title='twitter'
        to='https://twitter.com'
        className='social-link'
        aria-label='link to twitter'
      >
        <Icon iconName={IconType.twitter} />
      </Link>
      <Text text='Twitter' type={ThemeType.light} />
    </li>
    <li className='social-item'>
      <Link
        title='instagram'
        to='https://instagram.com'
        className='social-link'
        aria-label='link to instagram'
      >
        <Icon iconName={IconType.instagram} />
      </Link>
      <Text text='Instagram' type={ThemeType.light} />
    </li>
    <li className='social-item'>
      <Link
        title='facebook'
        to='https://facebook.com'
        className='social-link'
        aria-label='link to facebook'
      >
        <Icon iconName={IconType.facebook} />
      </Link>
      <Text text='Facebook' type={ThemeType.light} />
    </li>
  </ul>
);

export default Social;

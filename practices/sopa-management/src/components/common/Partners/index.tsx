// Components
import {
  Icon,
  IconType,
  SizeType,
  Text
} from '@components/common';

// Styles
import './partners.css';

const Partners = () => (
  <div data-testid='partners' className='partners'>
    <Text
      text='“These are the most thoughtfully designed sneakers on the market.”'
      type={SizeType.medium}
      className='partners-heading'
    />
    <div className='partners-image'>
      <Icon iconName={IconType.vogua} />
      <Icon iconName={IconType.esquire} />
      <Icon iconName={IconType.human} />
    </div>
  </div>
);

export default Partners;

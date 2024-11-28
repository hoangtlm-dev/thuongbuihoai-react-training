// Images
import { IMAGE } from '@constants/image';

// Components
import {
  Button,
  ButtonType,
  Image,
  Input,
  SizeType,
  Text,
} from '@components/common';

// Constants
import { CAROUSEL_BULLET } from '@constants/common';

// Styles
import './carousel.css';

const Carousel = () => (
  <div data-testid='carousel' className='carousel'>
    <div className='carousel-inner'>
      <Input
        className='carousel-open'
        type='radio'
        id='carousel-1'
        name='carousel'
        hidden
        checked
      />
      <figure className='carousel-item'>
        <Image
          url={IMAGE.banner}
          alt={IMAGE.altBanner}
          width={1170}
          height={657}
        />
      </figure>
      <Input
        className='carousel-open'
        type='radio'
        id='carousel-2'
        name='carousel'
        hidden
      />
      <figure className='carousel-item'>
        <Image
          url={IMAGE.banner2}
          alt={IMAGE.altBanner}
          width={1170}
          height={657}
          size='50vw'
        />
      </figure>
      <Input
        className='carousel-open'
        type='radio'
        id='carousel-3'
        name='carousel'
        hidden
      />
      <figure className='carousel-item'>
        <Image
          url={IMAGE.banner}
          alt={IMAGE.altBanner}
          width={1170}
          height={657}
        />
      </figure>
      <ul className='carousel-indicators'>
        {CAROUSEL_BULLET.map((item) => (
          <li key={item.key}>
            <label htmlFor={item.htmlFor} className={item.className} />
          </li>
        ))}
      </ul>
    </div>
    <div className='carousel-info'>
      <Text
        text='Step inside, for comfort and magic await you.'
        type={SizeType.large}
        className='carousel-heading'
      />
      <Button
        ariaLabel='Show now'
        children='Show now'
        type={ButtonType.primary}
      />
    </div>
  </div>
);

export default Carousel;

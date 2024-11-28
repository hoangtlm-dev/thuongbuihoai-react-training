// Components
import {
  RatingStar,
  SizeType,
  Text
} from '@components/common';

// Styles
import './rating.css';

const Rating = () => (
  <div data-testid='rating' className='rating'>
    <Text text='Ratings and Reviews' type={SizeType.extraMedium} />
    <Text
      text='An overwhelming 97% of reviewers have endorsed this product, recommending it wholeheartedly to their friends and family.'
      type={SizeType.regular}
      className='rating-info'
    />
    <Text text='4.7' type={SizeType.large} className='rating-point' />
    <RatingStar
      value='Based on 3,205 reviews'
      type={SizeType.normal}
      className='rating-review'
      classNameStar='rating-vote'
    />
    <hr />
  </div>
);

export default Rating;

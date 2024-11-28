// Hooks
import { useInfiniteProducts } from '@hooks/useQuery';

// Components
import {
  Button,
  ButtonType,
  Loading
} from '@components/common';
import ProductCard from './ProductCard';

// Styles
import './productList.css';

const ProductList = () => {
  const { data, fetchNextPage, hasNextPage, isLoading, isFetchingNextPage } =
    useInfiniteProducts();

    return (
    <div data-testid='product' className='product'>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <div data-testid='product-list' className='product-list'>
            {data?.map((page, index) =>
                <ProductCard
                  key={index}
                  data={page}
                />
            )}
          </div>
          <div className='product-btn'>
            {hasNextPage && (
              <Button
                ariaLabel='Show more'
                className='product-item-btn'
                children={isFetchingNextPage ? 'Loading more...' : 'Show More'}
                type={ButtonType.primary}
                onClick={() => fetchNextPage()}
                disable={isFetchingNextPage}
              />
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default ProductList;

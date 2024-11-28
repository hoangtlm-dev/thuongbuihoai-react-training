import React from 'react';
import { useInfiniteQuery } from 'react-query';
import axios from 'axios';

const fetchProducts = async ({ pageParam = 0 }) => {
  const offset = pageParam;
  const limit = offset === 0 ? 6 : 3; // Adjust the limit based on the offset
  const response = await axios.get(`https://63183dc9f6b281877c66cbe0.mockapi.io/api/experts?offset=${offset}&limit=${limit}`);
  return response.data;
};

const ProductList = () => {
  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useInfiniteQuery('products', fetchProducts, {
    getNextPageParam: (lastPage, allPages) => {
      if (lastPage.length < 3) {
        return null; // Stop fetching when the last page is less than the limit
      }
      return allPages.length * 3 + 6; // Adjust the offset based on the page count and limit
    },
  });

  return (
    <div>
      <h2>Product List</h2>
      {data?.pages.map((page, index) => (
        <React.Fragment key={index}>
          {page.map((product) => (
            <div key={product.id}>
              <p>{product.name}</p>
            </div>
          ))}
        </React.Fragment>
      ))}
      <button onClick={() => fetchNextPage()} disabled={!hasNextPage || isFetchingNextPage}>
        {isFetchingNextPage ? 'Loading more...' : hasNextPage ? 'See More' : 'No more products'}
      </button>
    </div>
  );
};

export default ProductList;

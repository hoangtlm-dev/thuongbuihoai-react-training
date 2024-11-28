import { useInfiniteQuery } from "react-query";

const InfiniteQuery = () => {
  const fetchExpert = async ({ pageParam = 0 }) => {
    const res = await fetch('https://63183dc9f6b281877c66cbe0.mockapi.io/api/experts?cursor=' + pageParam)
    return res.json()
  }

  const {
    data,
    error,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isFetchingNextPage,
    status,
  } = useInfiniteQuery({
    queryKey: ['experts'],
    queryFn: fetchExpert,
    getNextPageParam: (lastPage) => lastPage.nextCursor,
  })

  return status === 'loading' ? (
    <p>Loading...</p>
  ) : status === 'error' ? (
    <p>Error: {error.message}</p>
  ) : (
    <>
    <h2>Infinite Query</h2>
      {data?.map((group: any) => (
        <p>{group.name}</p>
      ))}
      <div>
        <button
          onClick={() => fetchNextPage()}
          disabled={!hasNextPage || isFetchingNextPage}
        >
          {isFetchingNextPage
            ? 'Loading more...'
            : hasNextPage
            ? 'Load More'
            : 'Nothing more to load'}
        </button>
      </div>
      <div>{isFetching && !isFetchingNextPage ? 'Fetching...' : null}</div>
    </>
  )
}

export default InfiniteQuery;
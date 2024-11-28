### useQuery
- Just like SWR, useQuery also performs queries to fetch data, it has additional options such as queryKey, queryFn, enabled, retry, onSuccess, onError,...
### useInfiniteQuery
- `useInfiniteQuery` to load news list from API, use `fetchNewsPages` to make API call. We have provided `getNextPageParam` to determine the next page based on the last page data.
### useMutation
- used to make changes (mutations) to data, such as `creating`, `updating`, or `deleting` data.
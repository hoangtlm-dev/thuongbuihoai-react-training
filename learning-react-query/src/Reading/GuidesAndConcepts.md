## Guides and Concepts
### Important Defaults
- Query instances via useQuery or useInfiniteQuery by default consider cached data as stale
- *To change this behavior, you can configure your queries both globally and per-query using the staleTime option. Specifying a longer staleTime means queries will not refetch their data as often*
- Stale queries are refetched automatically in the background when:
  - New instances of the query mount
  - The window is refocused
  - The network is reconnected
  - The query is optionally configured with a refetch interval
### Queries
- FetchStatus
  - `fetchStatus === 'fetching'` - The query is currently fetching.
  - `fetchStatus === 'paused'` - The query wanted to fetch, but it is paused.
  - `fetchStatus === 'idle'` - The query is not doing anything at the moment.
### Why two different states?
- a query in success status will usually be in idle fetchStatus, but it could also be in fetching if a background refetch is happening.
- a query that mounts and has no data will usually be in loading status and fetching fetchStatus, but it could also be paused if there is no network connection.
- The status gives information about the data: Do we have any or not?
- The fetchStatus gives information about the queryFn: Is it running or not?
### Query Keys
#### Simple Query Keys
- The simplest form of a key is an array with constants values.
```
// A list of todos
useQuery({ queryKey: ['todos'], ... })

// Something else, whatever!
useQuery({ queryKey: ['something', 'special'], ... })
```
#### Array Keys with variables
```
// An individual todo
useQuery({ queryKey: ['todo', 5], ... })

// An individual todo in a "preview" format
useQuery({ queryKey: ['todo', 5, { preview: true }], ...})

// A list of todos that are "done"
useQuery({ queryKey: ['todos', { type: 'done' }], ... })
```
#### Query Keys are hashed deterministically!
- This means that no matter the order of keys in objects, all of the following queries are considered equal:
```
useQuery({ queryKey: ['todos', { status, page }], ... })
useQuery({ queryKey: ['todos', { page, status }], ...})
useQuery({ queryKey: ['todos', { page, status, other: undefined }], ... })
```
- The following query keys, however, are not equal. Array item order matters!
```
useQuery({ queryKey: ['todos', status, page], ... })
useQuery({ queryKey: ['todos', page, status], ...})
useQuery({ queryKey: ['todos', undefined, page, status], ...})
```
#### If your query function depends on a variable, include it in your query key
- Since query keys uniquely describe the data they are fetching, they should include any variables you use in your query function that change.
```
function Todos({ todoId }) {
  const result = useQuery({
    queryKey: ['todos', todoId],
    queryFn: () => fetchTodoById(todoId),
  })
}
```
### Query Functions
- A query function can be literally any function that `returns a promise`. The promise that is returned should either `resolve the data` or `throw an error`.
### Background Fetching Indicators
- A query's `status === 'loading'` state is sufficient enough to show the initial hard-loading state for a query, but sometimes you may want to display an additional indicator that a query is refetching in the background. To do this, queries also supply you with an `isFetching` boolean that you can use to show that it's in a fetching state.
#### Displaying Global Background Fetching Loading State
- In addition to individual query loading states, if you would like to show a global loading indicator when **any** queries are fetching (including in the background), you can use the `useIsFetching` hook:
### Paginated / Lagged Queries
- Rendering paginated data is a very common UI pattern and in TanStack Query, it "just works" by including the page information in the query key:
```
const result = useQuery({
  queryKey: ['projects', page],
  queryFn: fetchProjects
})
```
- *The UI jumps in and out of the success and loading states because each new page is treated like a brand new query.*
#### Better Paginated Queries with keepPreviousData
-  If we were to use `useQuery`, **it would still technically work fine**, but the UI would jump in and out of the `success` and `loading` states as different queries are created and destroyed for each page or cursor. By setting `keepPreviousData` to `true` we get a few new things:
- **The data from the last successful fetch is available while new data is being requested, even though the query key has changed**.
- When the new data arrives, the previous `data` is seamlessly swapped to show the new data.
#### Lagging Infinite Query results with keepPreviousData
- While not as common, the `keepPreviousData` option also works flawlessly with the `useInfiniteQuery` hook, so you can seamlessly allow your users to continue to see cached data while infinite query keys change over time.
### Infinite Queries
- Rendering lists that can additively "load more" data onto an existing set of data or "infinite scroll" is also a very common UI pattern. TanStack Query supports a useful version of `useQuery` called `useInfiniteQuery` for querying these types of lists.
- When using `useInfiniteQuery`, you'll notice a few things are different:
  - `data` is now an object containing infinite query data:
  - `data.pages` array containing the fetched pages
  - `data.pageParams` array containing the page params used to fetch the pages
  - The `fetchNextPage` and `fetchPreviousPage` functions are now available
  - The `getNextPageParam` and `getPreviousPageParam` options are available for both determining if there is more data to load and the information to fetch it.
  - A `hasNextPage` boolean is now available and is true if `getNextPageParam` returns a value other than undefined
  - A `hasPreviousPage` boolean is now available and is true if `getPreviousPageParam` returns a value other than undefined
  - The `isFetchingNextPage` and `isFetchingPreviousPage` booleans are now available to distinguish between a background refresh state and a loading more state
- **Note**: ***When using options like initialData or select in your query, make sure that when you restructure your data that it still includes data.pages and data.pageParams properties, otherwise your changes will be overwritten by the query in its return!***
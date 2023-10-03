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
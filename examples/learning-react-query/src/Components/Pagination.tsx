import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {
  useQuery,
  useQueryClient,
} from 'react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'


async function fetchProjects(page = 0) {
  const { data } = await axios.get('https://63183dc9f6b281877c66cbe0.mockapi.io/api/experts?page=' + page)
  return data
}

const Pagination = () => {
  const queryClient = useQueryClient()
  const [page, setPage] = useState(0)

  const { status, data, error, isFetching, isPreviousData } = useQuery({
    queryKey: ['experts', page],
    queryFn: () => fetchProjects(page),
    keepPreviousData: true,
    staleTime: 5000,
  })

  // Prefetch the next page!
  useEffect(() => {
    if (!isPreviousData && data?.hasMore) {
      queryClient.prefetchQuery({
        queryKey: ['experts', page + 1],
        queryFn: () => fetchProjects(page + 1),
      })
    }
  }, [data, isPreviousData, page, queryClient])

  return (
    <div>
      <h2>Pagination</h2>
      {status === 'loading' ? (
        <div>Loading...</div>
      ) : status === 'error' ? (
        <div>Error: {error.message}</div>
      ) : (
        // `data` will either resolve to the latest page's data
        // or if fetching a new page, the last successful page's data
        <div>
          {data.map((project) => (
            <p>{project.name}</p>
          ))}
        </div>
      )}
      <div>Current Page: {page + 1}</div>
      <button
        onClick={() => setPage((old) => Math.max(old - 1, 0))}
        disabled={page === 0}
      >
        Previous Page
      </button>{' '}
      <button
        onClick={() => {
          setPage((old) => (data?.hasMore ? old + 1 : old))
        }}
        disabled={isPreviousData || !data?.hasMore}
      >
        Next Page
      </button>
      {
        // Since the last page's data potentially sticks around between page requests,
        // we can use `isFetching` to show a background loading
        // indicator since our `status === 'loading'` state won't be triggered
        isFetching ? <span> Loading...</span> : null
      }{' '}
      <ReactQueryDevtools initialIsOpen />
    </div>
  )
}

export default Pagination;

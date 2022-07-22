## Routing

### Index routes

- The router will automatically route files named index to the root of the directory.

```
  pages/index.js → /
  pages/blog/index.js → /blog
```

### Nested routes

- The router supports nested files

```
  pages/blog/first-post.js → /blog/first-post
  pages/dashboard/settings/username.js → /dashboard/settings/username
```

### Linking between pages

```
  / → pages/index.js
  /about → pages/about.js
```

### Imperatively

- `next/link` should be able to cover most of your routing needs, but you can also do client-side navigations without it.

### Shallow Routing

- Shallow routing allows you to change the URL without running data fetching methods again
- To enable shallow routing, set the shallow option to `true`.

### Caveats

- Shallow routing only works for URL changes in the `current page`.

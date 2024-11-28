## Environment Variables

- To add environment variables to the JavaScript bundle, open `next.config.js` and add the env config:

```
  // in next.config.js
  module.exports = {
    env: {
      customKey: 'my-value',
    },
  }

  // usage
  function Page() {
    return <h1>The value of customKey is: {process.env.customKey}</h1>
  }

  export default Page
```

### Base Path

- `basePath` allows you to set a path prefix for the application.

```
  // in next.config.js
  module.exports = {
    basePath: '/docs',
  }
```

### Links

```
  export default function HomePage() {
    return (
      <>
        <Link href="/about">
          <a>About Page</a>
        </Link>
      </>
    )
  }
```

### Images

- When using the `next/image` component, you will need to add the `basePath` in front of src.
- For example, using /docs/me.png will properly serve your image when basePath is set to /docs.

```
  import Image from 'next/image'

  function Home() {
    return (
      <>
        <h1>My Homepage</h1>
        <Image
          src="/docs/me.png"
          alt="Picture of the author"
          width={500}
          height={500}
        />
        <p>Welcome to my homepage!</p>
      </>
    )
  }

  export default Home
```

### Rewrites

- Rewrites allow you to map an incoming request path to a different destination path.
- To use rewrites you can use the rewrites key in `next.config.js`:

```
  module.exports = {
    async rewrites() {
      return [
        {
          source: '/about',
          destination: '/',
        },
      ]
    },
  }
```

### Rewrite parameters

- When using parameters in a rewrite the parameters will be passed in the query by default when none of the parameters are used in the destination.

```
  module.exports = {
    async rewrites() {
      return [
        {
          source: '/old-about/:path*',
          destination: '/about', // The :path parameter isn't used here so will be automatically passed in the query
        },
      ]
    },
  }
```

### Path Matching

- Path matches are allowed, for example /blog/:slug will match /blog/hello-world (no nested paths):

### Wildcard Path Matching

- To match a wildcard path you can use \* after a parameter,

### Regex Path Matching

- To match a regex path you can wrap the regex in parenthesis after a parameter

### Header, Cookie, and Query Matching

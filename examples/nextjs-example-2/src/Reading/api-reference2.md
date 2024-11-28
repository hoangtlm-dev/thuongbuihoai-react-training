## next/image

### Required Props

- The <Image /> component requires the following properties.

- src
- width
- height

### Optional Props

- layout
- loader
- sizes
- quality
- priority
- placeholder

### Advanced Props

- style
- objectFit
- objectPosition
- onLoadingCompletes
  - The onLoadingComplete function accepts one parameter, an object with the following properties:
    - naturalWidth
    - naturalHeight
- loading
- blurDataURL
- lazyBoundary
  - With similar syntax to the margin property. Defaults to `"200px"`.

### lazyRoot

- A React Ref pointing to the scrollable parent element. Defaults to `null`

```
  import Image from 'next/image'
  import React from 'react'

  const lazyRoot = React.useRef(null)

  const Example = () => (
    <div ref={lazyRoot} style={{ overflowX: 'scroll', width: '500px' }}>
      <Image lazyRoot={lazyRoot} src="/one.jpg" width="500" height="500" />
      <Image lazyRoot={lazyRoot} src="/two.jpg" width="500" height="500" />
    </div>
  )
```

## next/script

### Optional Props

**- src**
**- strategy**

- `beforeInteractive` Load script before the page becomes interactive
- `afterInteractive` Load script immediately after the page becomes interactive
- `lazyOnload` Load script during browser idle time
- `worker` Load script in a web worker

**- onLoad**

- **Note**: `onLoad` can't be used with the `beforeInteractive` loading strategy.

**- onError**

- A method that executes if the script fails to load.
- **Note**: onError can't be used with the beforeInteractive loading strategy.

## next/head

- Built-in component for appending elements to the head of the page:

```
  import Head from 'next/head'

  function IndexPage() {
    return (
      <div>
        <Head>
          <title>My page title</title>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>
        <p>Hello world!</p>
      </div>
    )
  }

  export default IndexPage
```

- To avoid duplicate tags in your head you can use the `key` property

## next/amp

- To enable AMP, add the following config to your page:

```
  export const config = { amp: true }
```

## next/server

- `next/server` provides server-only helpers for use in `Middleware` and `Edge API Routes`.

### NextRequest

- The `NextRequest` object is an extension of the native `Request interface`

```
  import type { NextRequest } from 'next/server'
```

### NextFetchEvent

- The `NextFetchEvent` object extends the native `FetchEvent` object, and includes the `waitUntil() method.`

### NextResponse

- The `NextResponse` class extends the native `Response interface`, with the following:
  - Static Methods

```
  import { NextResponse } from 'next/server'
```

### userAgent

```
  import { userAgent } from 'next/server'
```

### How do I access Environment Variables?

- `process.env` can be used to access Environment Variables from Edge Middleware.

## next/future/image

- The n`ext/future/image` component is an experiment to improve both the performance and developer experience of next/image by using the native <img> element with better default behavior.

## Edge Runtime

- The Next.js Edge Runtime is based on standard Web APIs, which is used by `Middleware` and `Edge API Routes`

- Network APIs
- Encoding APIs
- Web Stream APIs
- Web Crypto APIs
- V8 Primitives
- Environment Variables
- Unsupported APIs

## Data fetching

### getInitialProps

- Recommended: `getStaticProps` or `getServerSideProps` instead of `getInitialProps`
- `getInitialProps` enables server-side rendering in a page and allows you to do initial data population
- This is especially useful for `SEO`.
- `getInitialProps` is an async function that can be added to any page as a `static method`

### Context Object

- getInitialProps receives a single argument called context, it's an object with the following properties:
  - `pathname` - Current route. That is the path of the page in /pages
  - `query` - Query string section of URL parsed as an object
  - `asPath` - String of the actual path (including the query) shown in the browser
  - `req` - HTTP request object (server only)
  - `res` - HTTP response object (server only)
  - `err` - Error object if any error is encountered during the rendering

### Caveats

- `getInitialProps` can not be used in children components, only in the default export of every page

### TypeScript

- If you're using TypeScript, you can use the `NextPage` type for function components:
- And for React.Component, you can use NextPageContext:

### getServerSideProps

- This is useful if you want to fetch data that changes often, and have the page update to show the most current data.

### Context parameter

- The context parameter is an object containing the following keys (param, req, res, query, preview, previewData, resolveUrl, \_next/data, locale, locales, defaultLocale)

### getServerSideProps return values

- The `getServerSideProps` function should return an object with any one of the following properties:

  - `props`: object is a key-value pair. It should be a serializable object so that any props passed,
  - `notFound`: The notFound boolean allows the page to return a 404 status and 404 Page,
    `notFound: true`, the page will return a 404 even if there was a successfully generated page before

    ```
      export async function getServerSideProps(context) {
        const res = await fetch(BASE_URL)
        const data = await res.json()

        if (!data) {
          return {
            notFound: true,
          }
        }

        return {
          props: { data }, // will be passed to the page component as props
        }
      }
    ```

  - `redirect`: The redirect object allows redirecting to internal and external resources,
    It should match the shape of { destination: string, permanent: boolean }

    ```
      export async function getServerSideProps(context) {
        const res = await fetch(`https://.../data`)
        const data = await res.json()

        if (!data) {
          return {
            redirect: {
              destination: '/',
              permanent: false,
            },
          }
        }

        return {
          props: {}, // will be passed to the page component as props
        }
      }
    ```

### getServerSideProps with TypeScript

- For TypeScript, you can use the GetServerSideProps type from `next`:

```
  import { GetServerSideProps } from 'next'

  export const getServerSideProps: GetServerSideProps = async (context) => {
    // ...
  }
```

- If you want to get inferred typings for your props, you can use `InferGetServerSidePropsType <typeof getServerSideProps>`

### getStaticPaths

### getStaticPaths return values

- The `getStaticPaths` function should return an object with the following required properties:
  - **paths**: The paths key determines which paths will be pre-rendered
  - **fallback: false**: If fallback is false, then any paths not returned by getStaticPaths will result in a 404 page.
  - **fallback: true**: The paths returned from getStaticPaths will be rendered to HTML at build time by getStaticProps. The paths that have not been generated at build time will not result in a 404 page.
- **Note**: `fallback: true` is not supported when using `next export`.

### When is fallback: true useful?

- `fallback: true` is useful if your app has a very large number of static pages that depend on data
- `fallback: true` will not update generated pages
  - **fallback: blocking**: If `fallback is 'blocking'`, new paths not returned by getStaticPaths will wait for the HTML to be generated
  - `fallback: 'blocking'` will not update generated pages by default.
- **Note**: `fallback: 'blocking'` is not supported when using next export.

### Fallback pages

- In the “fallback” version of a page:
  - The page’s props will be empty.
  - Using the router, you can detect if the fallback is being rendered, router.isFallback will be true.

### getStaticPaths with TypeScript

- For TypeScript, you can use the GetStaticPaths type from `next`:

```
  import { GetStaticPaths } from 'next'

  export const getStaticPaths: GetStaticPaths = async () => {
    // ...
  }
```

### getStaticProps

- Exporting a function called `getStaticProps` will pre-render a page at build time using the props returned from the function

```
  export async function getStaticProps(context) {
    return {
      props: {}, // will be passed to the page component as props
    }
  }
```

- You can import modules in top-level scope for use in `getStaticProps`. Imports used will not be bundled for the client-side

### Context parameter

- The context parameter is an object containing the following keys (params, preview, previewData, locale, locales, defaultLocale)

### getStaticProps return values

- The `getStaticProps` function should return an object containing either `props`, `redirect`, or `notFound` followed by an optional revalidate property.
  - **props**: object is a key-value pair
  - **revalidate**: property is the amount in seconds after which a page re-generation can occur (defaults to false or no revalidation).
  - **notFound**: The notFound boolean allows the page to return a 404 status and 404 Page. With notFound: true, the page will return a 404 even if there was a successfully generated page before
  - **redirect**:

### Reading files: Use process.cwd()

- Files can be read directly from the filesystem in `getStaticProps`.
- You can use `process.cwd()` which gives you the directory where Next.js is being executed.

## Static Optimization Indicator

- When a page qualifies for Automatic Static Optimization we show an indicator to let you know.
- To remove it open next.config.js and disable the autoPrerender config in devIndicators:

```
  module.exports = {
    devIndicators: {
      autoPrerender: false,
    },
  }
```

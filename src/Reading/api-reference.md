## Next.js CLI

The Next.js CLI allows you to start, build, and export your application.

To get a list of the available CLI commands

```
  npx next -h
```

### Development

- The application will start at `http://localhost:3000` by default. The default port can be changed with -p, like so:

```
  npx next dev -p 4000
```

### Production

- `next start` starts the application in production mode. The application should be compiled with `next build` first.
- The default port can be changed with -p, like so:

```
  npx next start -p 4000
```

### Lint

- `next lint` runs ESLint for all files in the pages, components, and lib directories.
- If you have other directories that you would like to lint, you can specify them using the --dir flag:

```
  next lint --dir utils
```

## next/router

### useRouter

- `useRouter` is a React Hook, meaning it cannot be used with classes

### router object

### router.push

- Handles client-side transitions, this method is useful for cases where `next/link` is not enough.

```
  import { useRouter } from 'next/router'

  export default function Page() {
    const router = useRouter()

    return (
      <button type="button" onClick={() => router.push('/about')}>
        Click me
      </button>
    )
  }
```

### Resetting state after navigation

- When navigating to the same page in Next.js, the page's state will `not be reset` by default as react does not unmount unless the parent component has changed.
- If you do not want this behavior, you have a couple of options:
  - using `useEffect`
  - Use a React `key`

```
  import { useRouter } from 'next/router'

  export default function MyApp({ Component, pageProps }) {
    const router = useRouter()
    return <Component key={router.asPath} {...pageProps} />
  }
```

### With URL object

- You can use a URL object in the same way you can use it for `next/link`. Works for both the url and as parameters:

### router.replace

- Similar to the `replace` prop in `next/link`, router.replace will prevent adding a new URL entry into the history stack.

### router.prefetch

- Prefetch pages for faster client-side transitions

### router.beforePopState

### router.back

- Navigate back in history. Equivalent to clicking the browser’s back button. It executes window.history.back().

### router.reload

- Reload the current URL. Equivalent to clicking the browser’s refresh button. It executes window.location.reload().

### router.events

- You can listen to different events happening inside the Next.js Router.

### withRouter

- If useRouter is not the best fit for you, withRouter can also add the same router object to any component.

## next/link

- Client-side transitions between routes can be enabled via the Link component exported by `next/link`.

### If the route has dynamic segments

### If the child is a custom component that wraps an <a> tag

- If the child of `Link` is a custom component that wraps an `<a> tag`, you must add `passHref` to `Link`
- If you’re using libraries like styled-components. Without this, the `<a>` tag will not have the `href` attribute

### If the child is a functional component

- If the child of `Link` is a functional component, in addition to using `passHref`, you must wrap the component in `React.forwardRef`:

```
  import Link from "next/link";
  import React from "react";

  // `onClick`, `href`, and `ref` need to be passed to the DOM element
  // for proper handling
  interface MyButtonProps {
    onClick?: any;
    href?: string;
  }

  const MyButton: React.FC<MyButtonProps> = React.forwardRef(
    ({ onClick, href }, ref) => {
      return (
        <a href={href} onClick={onClick} ref={ref}>
          Click Me
        </a>
      );
    },
  );

  function Home() {
    return (
      <Link href="/about" passHref>
        <MyButton />
      </Link>
    );
  }

  export default Home;
```

### With URL Object

- `Link` can also receive a URL object and it will automatically format it to create the URL string

### Replace the URL instead of push

```
  <Link href="/about" replace>
    <a>About us</a>
  </Link>
```

### Disable scrolling to the top of the page

```
  <Link href="/#hashid" scroll={false}>
    <a>Disables scrolling to the top</a>
  </Link>
```

## Font Optimization

- Next.js will automatically inline font CSS at build time

### How to use it?

- Add a `link` tag that loads the Google fonts CSS to Next.js’ built-in `Head` component.

```
import Head from 'next/head';

export default function MyPage() {
  return (
    <div>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Lobster"
          rel="stylesheet"
        />
      </Head>
      <p>Hello world!</p>
    </div>
  )
}
```

### Disabling Optimization

```
  // next.config.js

  module.exports = {
    optimizeFonts: false,
  }
```

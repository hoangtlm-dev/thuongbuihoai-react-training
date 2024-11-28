## Layouts

### Single Shared Layout with Custom App

```
  // pages/_app.js

  import Layout from '../components/layout'

  export default function MyApp({ Component, pageProps }) {
    return (
      <Layout>
        <Component {...pageProps} />
      </Layout>
    )
  }
```

### With TypeScript

### Data Fetching

```
  // components/layout.js

  import useSWR from 'swr'
  import Navbar from './navbar'
  import Footer from './footer'

  export default function Layout({ children }) {
    const { data, error } = useSWR('/api/navigation', fetcher)

    if (error) return <div>Failed to load</div>
    if (!data) return <div>Loading...</div>

    return (
      <>
        <Navbar links={data.links} />
        <main>{children}</main>
        <Footer />
      </>
    )
  }
```

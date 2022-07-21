### Data Fetching Overview
- Data fetching in Next.js allows you to render your content in different ways, depending on your application's use case
#### getServerSideProps
##### When does getServerSideProps run
  - `getServerSideProps` only runs on server-side and never runs on the browser
  - When you request this page directly, `getServerSideProps` runs at request time
  - When you request this page on client-side page transitions through `next/link` or `next/router`, Next.js sends an API request to the server, which runs `getServerSideProps`
  - `getServerSideProps` can only be exported from a page. You can’t export it from non-page files.
##### When should I use getServerSideProps
- You should use getServerSideProps `only` if you need to render a page whose data must be fetched `at request time`
##### Fetching data on the client side
- If you don’t need to pre-render the data, you can fetch the data on the client side
##### Does getServerSideProps render an error page
- If an error is thrown `inside` getServerSideProps, it will show the `pages/500.js` file.
##### When should I use getStaticPaths?
- You should use `getStaticPaths` if you’re statically pre-rendering pages that use dynamic routes
##### When does getStaticPaths run
- `getStaticPaths` will only run during build in production, it will not be called during runtime
##### How does getStaticProps run with regards to getStaticPaths
- getStaticProps runs during next build for any paths returned during build
- getStaticProps runs in the background when using fallback: true
- getStaticProps is called before initial render when using fallback: blocking
#### Where can I use getStaticPaths
- **Note** that you must use export getStaticPaths as a standalone function — it will not work if you add getStaticPaths as a property of the page component.
##### When does getStaticProps run
- `getStaticProps` always runs on the server and never on the client.
##### Write server-side code directly
### Pages
- `.js`, .`jsx`, `.ts`, or `.tsx`
- I see in react, when I want to switch to another page, I need to use react router. but in nextJs, i see it as html, i want to go to where the page goes, just link there, for example: /about, /contact

```
  // about.tsx
  import React from "react";

  const About: React.FC = () => {
    return <div>about</div>;
  };

  export default About;

  // index.tsx
  <a href="/about">about</a>
```

### Pre-rendering
- Next.js **pre-renders** every page
- *hydration* is page is loaded by the browser, its JavaScript code runs and makes the page fully interactive.

### Two forms of Pre-rendering
- Next.js has two forms of pre-rendering: **Static Generation** and **Server-side Rendering**.
  - **Static Generation (Recommended)**: The HTML is generated at **build time** and will be reused on each request.
  - **Server-side Rendering**: The HTML is generated on **each request**.

### Static Generation (Recommended)
- In Next.js, you can statically generate pages **with or without data**
#### Static Generation without data
- By default, Next.js pre-renders pages using Static Generation without fetching data.
```
  const About: React.FC = () => {
    return <div>about</div>;
  };

  export default About;
```
#### Static Generation with data
- Some pages require fetching external data for pre-rendering
1. Your page `content` depends on external data: Use `getStaticProps`.
2. Your page paths depend on external data: Use `getStaticPaths` (usually in addition to `getStaticProps`).

- **getStaticProps (Static Generation)**
=> Get data at `build time`. The getStaticProps method can be used `inside a Page` to get data at `build time`
- **getStaticPaths**
- Use when our page has dynamic router eg `post/1`, `post/2`.
- `getStaticPaths` will `decide` which pages should be spawned. The paths of the generated pages will be in the paths set returned in the getStaticPaths function.

- Example:
```
- pnpm dev
- getStaticProps (Static Generation)
  http://localhost:3000/posts
- getStaticPaths
  http://localhost:3000/posts/1
```

### When should I use Static Generation?
- Using **Static Generation** (with and without data)
- Use Static Generation with **Client-side Rendering**: You can skip pre-rendering some parts of a page and then use client-side JavaScript to populate them
- Use **Server-Side Rendering**: It will be slower because the page cannot be cached by a CDN, but the pre-rendered page will always be up-to-date
### Server-side Rendering
- To use `Server-side Rendering` for a page, you need to `export` an `async` function called `getServerSideProps`. This function will be called by the server on every request.
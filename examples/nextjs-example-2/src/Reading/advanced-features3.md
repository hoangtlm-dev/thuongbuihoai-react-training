## Source Maps

- During production builds, they are disabled to prevent you leaking your source on the client

### Configuration flag

- Next.js provides a configuration flag you can use to enable browser source map generation during the production build:

```
  // next.config.js
  module.exports = {
    productionBrowserSourceMaps: true,
  }
```

## Next.js Codemods

- Next.js provides Codemod transformations to help upgrade your Next.js codebase when a feature is deprecated.

## Internationalized Routing

- You can provide a list of locales, the default locale, and domain-specific locales and Next.js will automatically handle the routing.

### Getting started

- To get started, add the i18n config to your next.config.js file.

```
  // next.config.js
  module.exports = {
    i18n: {
      locales: ['en-US', 'fr', 'nl-NL'],
      defaultLocale: 'en-US',
      domains: [
        {
          domain: 'example.com',
          defaultLocale: 'en-US',
        },
        {
          domain: 'example.nl',
          defaultLocale: 'nl-NL',
        },
        {
          domain: 'example.fr',
          defaultLocale: 'fr',
          http: true,
        },
      ],
    },
  }
```

### Locale Strategies

- There are two locale handling strategies: Sub-path Routing and Domain Routing.

#### Sub-path Routing

- Sub-path Routing puts the locale in the url path.

```
  // next.config.js
  module.exports = {
    i18n: {
      locales: ['en-US', 'fr', 'nl-NL'],
      defaultLocale: 'en-US',
    },
  }
```

#### Domain Routing

- By using domain routing you can configure locales to be served from different domains:

### Automatic Locale Detection

- When a user visits the application root (generally /), Next.js will try to automatically detect which locale the user prefers based on the Accept-Language header and the current domain.

#### Disabling Automatic Locale Detection

```
  // next.config.js
  module.exports = {
    i18n: {
      localeDetection: false,
    },
  }
```

### Accessing the locale information

- You can access the locale information via the Next.js router. For example, using the `useRouter()` hook

### Transition between locales

- You can use `next/link` or next/router to transition between locales
- When using the next/router methods directly, you can specify the locale that should be used via the transition options

### Limits for the i18n config

- locales: 100 total locales
- domains: 100 total locale domain items

## Output File Tracing

- During a build, Next.js will automatically trace each page and its dependencies to determine all of the files that are needed for deploying a production version of your application.

### Automatically Copying Traced Files

- Next.js can automatically create a standalone folder which copies only the necessary files for a production deployment including select files in node_modules.

```
  module.exports = {
    output: 'standalone',
  }
```

## Security Headers

- To improve the security of your application, you can use headers in next.config.js

```
  // next.config.js
  const securityHeaders = []

  module.exports = {
    async headers() {
      return [
        {
          // Apply these headers to all routes in your application.
          source: '/:path*',
          headers: securityHeaders,
        },
      ]
    },
  }
```

## React 18

- React 18 adds new features including Suspense, automatic batching of updates, APIs like startTransition, and a new streaming API for server rendering with support for React.lazy.

### Using React 18 with Next.js

```
  npm install next@latest react@latest react-dom@latest
```

### Streaming SSR

- Next.js supports React 18 streaming server-rendering (SSR) out of the box.

## React Server Components (Alpha)

- Server Components allow us to render React components on the server

### Enable React Server Components

```
npm install next@canary react@latest react-dom@latest
```

- Then, update your next.config.js:

```
`// next.config.js
module.exports = {
  experimental: {
    runtime: 'nodejs',
    serverComponents: true,
  },
}`
```

### Server Components Conventions

- To run a component on the server, append .server.js to the end of the filenames: `./pages/home.server.js`
- For client components, append .client.js to the filename: `./components/avatar.client.js`.
- Server components can import server components and client components.
- Client components cannot import server components.

### Supported Next.js APIs

#### next/link and next/image

- You can use `next/link` and `next/image` like before and they will be treated as client components to keep the interaction on client side.

#### next/document

#### next/app

## Incrementally Adopting Next.js

- Next.js has been designed for gradual adoption. With Next.js, you can continue using your existing code and add as much (or as little) React as you need.

### Strategies

#### Subpath

- The first strategy is to configure your server or proxy such that, everything under a specific subpath points to a Next.js app

```
  example.com => example.com/store
  // next.config.js

  module.exports = {
    basePath: '/store',
  }
```

#### Rewrites

- The second strategy is to create a new Next.js app that points to the root URL of your domain

#### Micro-Frontends with Monorepos and Subdomains

Next.js and Vercel make it straightforward to adopt micro-frontends and deploy as a Monorepo. This allows you to use subdomains to adopt new applications incrementally.

## Migrating from Gatsby

- This guide will help you understand how to transition from an existing Gatsby project to Next.js.

### Updating package.json and dependencies

- The first step towards migrating to Next.js is to update package.json and dependencies
  - Remove all Gatsby-related packages (but keep react and react-dom).
  - Install next.
  - Add Next.js related commands to scripts

```
  {
    "scripts": {
      "dev": "next dev",
      "build": "next build",
      "start": "next start"
    },
    "dependencies": {
      "next": "latest",
      "react": "latest",
      "react-dom": "latest"
    }
  }
```

### Static Assets and Compiled Output

- Gatsby uses the public directory for the compiled output, whereas Next.js uses it for static assets. Here are the steps for migration
  - Remove .cache/ and public from .gitignore and delete both directories.
  - Rename Gatsby’s static directory as public.
  - Add .next to .gitignore

### Creating Routes

- Both Gatsby and Next support a pages directory, which uses file-system based routing

### Styling

- With Gatsby, global CSS imports are included in gatsby-browser.js.

### Links

- The Gatsby Link and Next.js Link component have a slightly different API.

```
  // Gatsby
  import { Link } from 'gatsby'
  export default function Home() {
    return <Link to="/blog">blog</Link>
  }

  // Next.js
  import Link from 'next/link'
  export default function Home() {
    return (
      <Link href="/blog">
        <a>blog</a>
      </Link>
    )
  }
```

### Data Fetching

- The largest difference between `Gatsby` and `Next.js` is how data fetching is implemented
- `Gatsby` uses the `graphql` tag to query data in the pages of your site
- `Gatsby` only allows the creation of static pages
- With `Next.js`, you can choose on a per-page basis which data fetching strategy you want

### Image Component and Image Optimization

- The Next.js Image Component, next/image, is an extension of the HTML <img> element, evolved for the modern web.

### Migrating from Gatsby Image

- Instead of optimizing images at build time, Next.js optimizes images on-demand, as users request them.
- Unlike static site generators and static-only solutions, your build times aren't increased, whether shipping 10 images or 10 million images.
- This means you can remove common Gatsby plugins like:

```
gatsby-image
gatsby-transformer-sharp
gatsby-plugin-sharp
```

### Site Configuration

- With Gatsby, your site's metadata (name, description, etc.) is located inside gatsby-config.js
- With Next.js, we recommend creating a config file similar to below. You can then import this file anywhere without having to use GraphQL to access your site's metadata.

```
  // src/config.js
  export default {
    title: 'Starter Blog',
    author: {
      name: 'Lee Robinson',
      summary: 'who loves Next.js.',
    },
    description: 'A starter blog converting Gatsby -> Next.',
    social: {
      twitter: 'leeerob',
    },
  }
```

### Search Engine Optimization

- Most `Gatsby` examples use `react-helmet` to assist with adding meta tags for proper `SEO`. With `Next.js`, we use `next/head` to add meta tags to your <head /> element.

## Migrating from Create React App

### Updating package.json and dependencies

- The first step towards migrating to Next.js is to update package.json and dependencies
  - Remove react-scripts (but keep react and react-dom). If you're using React Router, you can also remove react-router-dom.
  - Install next.
  - Add Next.js related commands to scripts

```
  {
    "scripts": {
      "dev": "next dev",
      "build": "next build",
      "start": "next start"
    },
    "dependencies": {
      "next": "latest",
      "react": "latest",
      "react-dom": "latest"
    }
  }
```

### Static Assets and Compiled Output

- Create React App uses the public directory for the entry HTML file as well as static assets, but Next.js only uses it for static assets
  - Move any images, fonts, or other static assets to public.
  - Convert index.html (the entry point of your application) to Next.js.
  - See Styling for CSS/Sass files.
  - Add .next to .gitignore.

### Creating Routes & Linking

- With Create React App, you're likely using React Router. Instead of using a third-party library, Next.js includes its own file-system based routing.

### Styling

- Next.js has built-in support for CSS, Sass and CSS-in-JS.
- With Create React App, you can import .css files directly inside React components

### Safely Accessing Web APIs

- With client-side rendered applications (like Create React App), you can access window, localStorage, navigator, and other Web APIs out of the box.

### Image Component and Image Optimization

### Environment Variables

- Next.js has support for .env Environment Variables similar to Create React App.
  - Change all environment variables with the `REACT_APP_` prefix to `NEXT_PUBLIC_`.
  - Server-side environment variables will be available at build-time and in API Routes.

### Single-Page App (SPA)

- If you want to move your existing Create React App to Next.js and keep a Single-Page App, you can move your old application's entry point to an Optional Catch-All Route named `pages/[[...app]].js`.

## Migrating from React Router

- This guide will help you understand how to transition from React Router to file-system based routes with Next.js. Using `next/link` and `next/router`

### Basics

- The Link component for performing client-side route transitions is slightly different from React Router.

```
  // Before (React Router)
  import { Link } from 'react-router-dom'
  export default function App() {
    return <Link to="/about">About</Link>
  }

  // After (Next.js)
  import Link from 'next/link'
  export default function App() {
    return (
      <Link href="/about">
        <a>About</a>
      </Link>
    )
  }
```

- With Next.js, you can express the same application structure in the file system. When a file is added to the pages directory it's automatically available as a route.

```
pages/about.js → /about
pages/blog.js → /blog
pages/index.js → /
```

### Nested Routes

- Next.js has built-in support for Code Splitting. This means you can remove any instances of:

  - @loadable/server, @loadable/babel-plugin, and @loadable/webpack-plugin
  - Modifications to your .babelrc for @loadable/babel-plugin

### Scroll Restoration

- Next.js has built-in support for Scroll Restoration. This means you can remove any custom ScrollToTop components you have defined.
- The default behavior of `next/link` and `next/router` is to scroll to the top of the page. You can also disable this if you prefer.

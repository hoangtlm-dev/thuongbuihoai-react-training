## Customizing Babel Config

- Next.js includes the next/babel preset to your app, which includes everything needed to compile React applications and server-side code

## Customizing PostCSS Config

### Default Behavior

- Next.js compiles CSS for its built-in CSS support using PostCSS.

### Customizing Target Browsers

- Next.js allows you to configure the target browsers (for Autoprefixer and compiled css features) through Browserslist.

```
  // package.json
  {
    "browserslist": [">0.3%", "not ie 11", "not dead", "not op_mini all"]
  }
```

### CSS Modules

- No configuration is needed to support CSS Modules. To enable CSS Modules for a file, rename the file to have the extension `.module.css`.

### Customizing Plugins

- To customize the PostCSS configuration, create a `postcss.config.json` file in the root of your project.

```
  {
    "plugins": [
      "postcss-flexbugs-fixes",
      [
        "postcss-preset-env",
        {
          "autoprefixer": {
            "flexbox": "no-2009"
          },
          "stage": 3,
          "features": {
            "custom-properties": false
          }
        }
      ]
    ]
  }
```

- **Do not** use `require()` to import the PostCSS Plugins. Plugins must be provided as strings.

## Custom Server

- By default, Next.js includes its own server with next start.
- **Note**: A custom server cannot be deployed on Vercel.

### Disabling file-system routing

```
  // next.config.js
  module.exports = {
    useFileSystemPublicRoutes: false,
  }
```

## Custom App

- Next.js uses the App component to initialize pages. You can override it and control the page initialization.

### Caveats

- If your app is running and you added a custom App, you'll need to restart the development server.
- When you add getInitialProps in your custom app, you must import App from "next/app"

## Custom Document

- A custom Document can update the <html> and <body> tags used to render a Page.

### Caveats

- Document currently does not support Next.js Data Fetching methods like `getStaticProps` or `getServerSideProps`.

### Customizing renderPage

- **Note**: This is advanced and only needed for libraries like CSS-in-JS to support server-side rendering. This is not needed for built-in styled-jsx support.
- To prepare for React 18, we recommend `avoiding` customizing `getInitialProps` and `renderPage`

### Custom Error Pages

#### 404 Page

- A 404 page may be accessed very often. This can result in increased costs and slow experiences.
- Next.js provides a static 404 page by default without having to add any additional files.

#### Customizing The 404 Page

- To create a custom 404 page you can create a pages/404.js file.

```
  // pages/404.js
  export default function Custom404() {
    return <h1>404 - Page Not Found</h1>
  }
```

- **Note**: You can use `getStaticProps` inside this page if you need to fetch data at build time.

#### 500 Page

- Next.js provides a static 500 page by default without having to add any additional files.

#### Customizing The 500 Page

```
  // pages/500.js
  export default function Custom500() {
    return <h1>500 - Server-side error occurred</h1>
  }
```

- **Note**: You can use getStaticProps inside this page if you need to fetch data at build time.

#### More Advanced Error Page Customizing

- 500 errors are handled both `client-side` and `server-side` by the Error component. If you wish to override it, define the file `pages/_error.js` and add the following code:

```
  function Error({ statusCode }) {
    return (
      <p>
        {statusCode
          ? `An error ${statusCode} occurred on server`
          : 'An error occurred on client'}
      </p>
    )
  }

  Error.getInitialProps = ({ res, err }) => {
    const statusCode = res ? res.statusCode : err ? err.statusCode : 404
    return { statusCode }
  }

  export default Error
```

#### Reusing the built-in error page

- If you want to render the built-in error page you can by importing the Error component:

#### Caveats

- Error does not currently support Next.js Data Fetching methods like `getStaticProps` or `getServerSideProps`.

### src Directory

- Pages can also be added under src/pages as an alternative to the root pages directory.
- The src directory is very common in many apps and Next.js supports it by default.

#### Caveats

- src/pages will be ignored if pages is present in the root directory

## Continuous Integration (CI) Build Caching

- To improve build performance, Next.js saves a cache to .next/cache that is shared between builds.
- If your CI is not configured to persist .next/cache between builds, you may see a No Cache Detected error.
- Here are some example cache configurations for common CI providers:
  - **Vercel**: Next.js caching is automatically configured for you. There's no action required on your part.
  - CircleCI, Travis CI, GitLab CI, Netlify CI, AWS CodeBuild, GitHub Actions, Bitbucket Pipelines, Heroku, Azure Pipelines

## Multi Zones

- A zone is a single deployment of a Next.js app. You can have multiple zones and merge them as a single app.

### How to define a zone

- There are no zone related APIs. You only need to do the following:
  - Make sure to keep only the pages you need in your app, meaning that an app can't have pages from another app
  - Make sure to configure a basePath to avoid conflicts with pages and static files.

### How to merge zones

- You can merge zones using Rewrites in one of the apps or any HTTP proxy.

## Measuring performance

- Next.js Analytics allows you to analyze and measure the performance of pages using different metrics.

## Middleware

- Middleware allows you to run code before a request is completed

### Using Middleware

1. Install the latest version of Next.js:

```
  npm install next@latest
```

2. Create a `middleware.ts (or .js)` file at the same level as your pages directory
3. Export a middleware function from the middleware.ts file:

```
  // middleware.ts
  import { NextResponse } from 'next/server'
  import type { NextRequest } from 'next/server'

  // This function can be marked `async` if using `await` inside
  export function middleware(request: NextRequest) {
    return NextResponse.redirect(new URL('/about-2', request.url))
  }

  // See "Matching Paths" below to learn more
  export const config = {
    matcher: '/about/:path*',
  }
```

### Matching Paths

- Middleware will be invoked for `every route` in your project. The following is the execution order:
- There are two ways to define which paths Middleware will run on:
  - Custom matcher config
  - Conditional statements

### Matcher

- matcher allows you to filter Middleware to run on specific paths.

```
  export const config = {
    matcher: '/about/:path*',
  }

  // You can match a single path or multiple paths with an array syntax:
  export const config = {
    matcher: ['/about/:path*', '/dashboard/:path*'],
  }
```

### Conditional Statements

```
  // middleware.ts
  import { NextResponse } from 'next/server'
  import type { NextRequest } from 'next/server'

  export function middleware(request: NextRequest) {
    if (request.nextUrl.pathname.startsWith('/about')) {
      return NextResponse.rewrite(new URL('/about-2', request.url))
    }

    if (request.nextUrl.pathname.startsWith('/dashboard')) {
      return NextResponse.rewrite(new URL('/dashboard/user', request.url))
    }
  }
```

### NextResponse

- The NextResponse API allows you to:
  - redirect the incoming request to a different URL
  - rewrite the response by displaying a given URL
  - Set response cookies
  - Set response headers

### Using Cookies

- The cookies API extends Map and allows you to `get`, `set`, and `delete` cookies. It also includes methods like entries and values.

## Debugging

- Next.js frontend and backend code with full source maps support using either the VS Code debugger or Chrome DevTools.

### Debugging with VS Code

```
  // .vscode/launch.json
  {
    "version": "0.2.0",
    "configurations": [
      {
        "name": "Next.js: debug server-side",
        "type": "node-terminal",
        "request": "launch",
        "command": "npm run dev"
      },
      {
        "name": "Next.js: debug client-side",
        "type": "pwa-chrome",
        "request": "launch",
        "url": "http://localhost:3000"
      },
      {
        "name": "Next.js: debug full stack",
        "type": "node-terminal",
        "request": "launch",
        "command": "npm run dev",
        "console": "integratedTerminal",
        "serverReadyAction": {
          "pattern": "started server on .+, url: (https?://.+)",
          "uriFormat": "%s",
          "action": "debugWithChrome"
        }
      }
    ]
  }
```

- pnpm run dev. Now go to the Debug panel (Ctrl+Shift+D on Windows/Linux, ⇧+⌘+D on macOS),

### Using the Debugger in Jetbrains WebStorm

- Click the drop down menu listing the runtime configuration, and click Edit Configurations.... Create a Javascript Debug debug configuration with http://localhost:3000 as the UR

### Debugging with Chrome DevTools

#### Client-side code

```
pnpm run dev
open Chrome's Developer Tools (Ctrl+Shift+J on Windows/Linux, ⌥+⌘+I on macOS)
```

#### Server-side code

- To debug server-side Next.js code with Chrome DevTools, you need to pass the --inspect flag to the underlying Node.js process
- Should update the dev script on your package.json:

```
  "dev": "NODE_OPTIONS='--inspect' next dev"
```

#### Debugging on Windows

- Using NODE_OPTIONS='--inspect' as that syntax is not supported on Windows platforms. To get around this, install the cross-env package as a development dependency

```
  "dev": "cross-env NODE_OPTIONS='--inspect' next dev",
```

## Error Handling

### Handling Errors in Development

- When there is a runtime error during the development phase of your Next.js application, you will encounter an `overlay`. Fixing the error will automatically dismiss the overlay.

### Handling Server Errors

- Next.js provides a static 500 page by default to handle server-side errors that occur in your application.
- You can also use 404 page to handle specific runtime error like file not found.

### Handling Client Errors

- React Error Boundaries is a graceful way to handle a JavaScript error on the client so that the other parts of the application continue working

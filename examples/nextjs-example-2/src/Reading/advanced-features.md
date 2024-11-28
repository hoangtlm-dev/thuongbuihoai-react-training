## Next.js Compiler

### Why SWC?

- SWC is an extensible Rust-based platform for the next generation of fast developer tools.
- SWC can be used for compilation, minification, bundling, and more – and is designed to be extended
- We chose to build on SWC for a few reasons:
  - **Extensibility**: SWC can be used as a Crate inside Next.js, without having to fork the library or workaround design constraints.
  - **Performance**: We were able to achieve ~3x faster Fast Refresh and ~5x faster builds in Next.js by switching to SWC
  - **WebAssembly**
  - **Community**

### Supported Features

#### Styled Components

#### Jest

- Jest support not only includes the transformation previously provided by Babel, but also simplifies configuring Jest together with Next.js including

#### Relay

#### Remove React Properties

```
  // next.config.js
  module.exports = {
    compiler: {
      reactRemoveProperties: true,
    },
  }
```

#### Remove Console

```
  // next.config.js
  module.exports = {
    compiler: {
      removeConsole: true,
    },
  }
```

#### Legacy Decorators

```
  {
    "compilerOptions": {
      "experimentalDecorators": true
    }
  }
```

#### importSource

```
  {
    "compilerOptions": {
      "jsxImportSource": 'preact'
    }
  }
```

#### Emotion

### Experimental Features

#### Minification

- You can opt-in to using the Next.js compiler for minification. This is 7x faster than Terser.

```
  // next.config.js

  module.exports = {
    swcMinify: true,
  }
```

## Preview Mode

### Step 1. Create and access a preview API route

- First, create a preview API route. It can have any name
- In this API route, you need to call setPreviewData on the response object

### Step 2. Update getStaticProps

### Fetch preview data

- You can update getStaticProps to fetch different data based on context.preview and/or context.previewData.

## More Details

### Clear the Preview Mode cookies

- To clear the Preview Mode cookies manually, create an API route that calls `clearPreviewData()`:

```
  // pages/api/clear-preview-mode-cookies.js

  export default function handler(req, res) {
    res.clearPreviewData()
  }
```

### Specify the Preview Mode duration

- `setPreviewData` takes an optional second parameter which should be an options object.
- **maxAge**: Specifies the number (in seconds) for the preview session to last for

```
  setPreviewData(data, {
    maxAge: 60 * 60, // The preview mode cookies expire in 1 hour
  })
```

### previewData size limits

- You can pass an object to setPreviewData and have it be available in getStaticProps. Currently, preview data is limited to 2KB.

### Works with getServerSideProps

- The preview mode works on getServerSideProps as well. It will also be available on the context object containing `preview` and `previewData`

### Works with API Routes

- API Routes will have access to `preview` and `previewData` under the request object.

## Dynamic Import

- Next.js supports lazy loading external libraries with `import()` and React components with `next/dynamic`

### With named exports

- To dynamically import a named export, you can return it from the `Promise` returned by `import()`:

### With no SSR

- To dynamically load a component on the client side, you can use the ssr option to disable server-rendering

```
  import dynamic from 'next/dynamic'

  const DynamicHeader = dynamic(() => import('../components/header'), {
    ssr: false,
  })
```

### Automatic Static Optimization

- The result is an ultra fast loading experience for your users.

### Static HTML Export

- `next export` allows you to export your Next.js application to static HTML
- **next export**

```
  // in package.json
  "scripts": {
    "build": "next build && next export"
  }
```

### Supported Features

- The majority of core Next.js features needed to build a static site are supported, including:
  - Dynamic Routes when using getStaticPaths
  - Prefetching with next/link
  - Preloading JavaScript
  - Dynamic Imports
  - Any styling options (e.g. CSS Modules, styled-jsx)
  - Client-side data fetching
  - getStaticProps
  - getStaticPaths
  - Image Optimization using a custom loader

### Unsupported Features

- Features that require a Node.js server, or dynamic logic that cannot be computed during the build process, are not supported:
  - Image Optimization (default loader)
  - Internationalized Routing
  - API Routes
  - Rewrites
  - Redirects
  - Headers
  - Middleware
  - Incremental Static Regeneration
  - fallback: true
  - getServerSideProps

### Absolute Imports and Module path aliases

### Using MDX with Next.js

- MDX is a superset of markdown that lets you write JSX directly in your markdown files.

### Why use MDX?

- Authoring in markdown is an intuitive way to write content, its terse syntax, once adopted, can enable you to write content that is both readable and maintainable.

### MDX Plugins

- This plugin ecosystem lets you parse code, transform HTML elements, change syntax, extract front matter, and more

### @next/mdx

- The @next/mdx package is configured in the next.config.js file at your projects root

### Setup @next/mdx in Next.js

```
  npm install @next/mdx @mdx-js/loader
```

- Require the package and configure to support top level .mdx pages

```
  // next.config.js

  const withMDX = require('@next/mdx')({
    extension: /\.mdx?$/,
    options: {
      remarkPlugins: [],
      rehypePlugins: [],
      // If you use `MDXProvider`, uncomment the following line.
      // providerImportSource: "@mdx-js/react",
    },
  })
  module.exports = withMDX({
    // Append the default value with md extensions
    pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
  })
```

- Create a new MDX page within the /pages directory:

```
 - /pages
    - my-mdx-page.mdx
  - package.json
```

### Using Components, Layouts and Custom Elements

- You can now import a React component directly inside your MDX page:

```
  import { MyComponent } from 'my-components'

  # My MDX page

  This is a list in markdown:

  - One
  - Two
  - Three

  Checkout my React component:

  <MyComponent/>
```

### Frontmatter

- Frontmatter is a YAML like key/value pairing that can be used to store data about a page.

### Layouts

- To add a layout to your MDX page, create a new component and import it into the MDX page. Then you can wrap the MDX page with your layout component:

### Custom Elements

- One of the pleasant aspects of using markdown, is that it maps to native HTML elements, making writing fast, and intuitive:

```
  # H1 heading

  ## H2 heading

  This is a list in markdown:

  - One
  - Two
  - Three

  // HTML
  <h1>H1 heading</h1>

  <h2>H2 heading</h2>

  <p>This is a list in markdown:</p>

  <ul>
    <li>One</li>
    <li>Two</li>
    <li>Three</li>
  </ul>
```

- To enable you need to specify providerImportSource: "@mdx-js/react" in `next.config.js`.

```
  // next.config.js

  const withMDX = require('@next/mdx')({
    // ...
    options: {
      providerImportSource: '@mdx-js/react',
    },
  })
```

## AMP Support

- With Next.js you can turn any React page into an AMP page, with minimal config, and without leaving React.

### Adding AMP Components

- The AMP community provides many components to make AMP pages more interactive.

```
  export const config = { amp: true }
```

### AMP Validation

- Custom Validators

```
module.exports = {
  amp: {
    validator: './custom_validator.js',
  },
}
```

- Skip AMP Validation

```
experimental: {
  amp: {
    skipValidation: true
  }
}
```

### AMP in Static HTML export

- When using next export to do Static HTML export statically prerender pages
- Next.js will automatically insert a link to the AMP version of your page in the HTML version

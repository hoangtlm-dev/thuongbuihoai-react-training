## Deployment

### Next.js Build API

- `next build` generates an optimized version of your application for production. This standard output includes:
  - HTML files for pages using `getStaticProps` or `Automatic Static Optimization`
  - CSS files for global styles or for individually scoped styles
  - JavaScript for pre-rendering dynamic content from the Next.js server
  - JavaScript for interactivity on the client-side through React
- This output is generated inside the `.next` folder:
  - `.next/static/chunks/pages` – Each JavaScript file inside this folder relates to the route with the `same name`
  - `.next/static/media` – Statically imported images from `next/image` are hashed and copied here
  - `.next/static/css` – `Global CSS files` for all pages in your application
  - `.next/server/pages` – The HTML and JavaScript entry points prerendered from the server. The `.nft.json` files are created when Output File Tracing is enabled and contain all the file paths that depend on a given page.
  - `.next/server/chunks` – Shared JavaScript chunks used in multiple places throughout your application
  - `.next/cache`– Output for the build cache and cached images, responses, and pages from the Next.js server
- All JavaScript code inside `.next` has been compiled and browser bundles have been minified

### Managed Next.js with Vercel

- `Vercel` is the fastest way to deploy your Next.js application with `zero configuration`.
- When deploying to Vercel, the platform automatically detects Next.js, runs `next build`

### Self-Hosting

#### Node.js Server

- Next.js can be deployed to any hosting provider that supports Node.js.

```
  {
    "scripts": {
      "dev": "next dev",
      "build": "next build",
      "start": "next start"
    }
  }
```

- `next build` to build your application
- `next start` to start the Node.js server.

#### Docker Image

- Next.js can be deployed to any hosting provider that supports Docker containers

```
1. Install Docker on your machine
2. Clone the with-docker example
3. Build your container: docker build -t nextjs-docker .
4. Run your container: docker run -p 3000:3000 nextjs-docker
```

### Managed Server

- Read reference
  - AWS Copilot
  - Digital Ocean App Platform
  - Google Cloud Run
  - Heroku
  - Railway
  - Render

### Static Only

- The following services support deploying Next.js using next export.

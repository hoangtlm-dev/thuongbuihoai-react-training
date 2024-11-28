# NEXTJS TRAINING PLAN
##### 21th Jul 2022

### OVERVIEW
- Official document: https://nextjs.org/ 
- Github: https://github.com/vercel/next.js

### TIMELINE
- 6 days (21/5/2022 - 28/5/2022)

### TARGET
- Know what is Nextjs, how it works
- Get familiar with basic features and routing
- Know how to build and deploy a site with Nextjs

### BASIC (5 days)
#### DOCUMENTATION

**Getting Started**

- [System Requirements](https://nextjs.org/docs/getting-started#system-requirements)
  - [Node.js 12.22.0](https://nodejs.org/) or later
  - MacOS, Windows (including WSL), and Linux are supported

**Basic features**

- Pages
- Data Fetching
- Built-in CSS Support
- Layouts
- Image Optimization
- Font Optimization
- Static File Serving
- Fast Refresh
- ESLint
- TypeScript
- Environment variables
- Supported Browsers and Features
- Handling Scripts

**Routing**

- Introduction
- Dynamic Routes
- Imperatively
- Shallow Routing
- Going to Production
- Caching
- Reducing JavaScript Size
- Logging
- Error Handling
- Loading Performance

**Deployment**

- Next.js build api
- Manange with Vercel: https://vercel.com/ 
- Self-hosting
- Managed server
  - [AWS Copilot](https://aws.github.io/copilot-cli/)
  - [Digital Ocean App Platform](https://docs.digitalocean.com/tutorials/app-nextjs-deploy/)
  - [Google Cloud Run](https://github.com/vercel/next.js/tree/canary/examples/with-docker)
  - [Heroku](https://elements.heroku.com/buildpacks/mars/heroku-nextjs)
  - [Railway](https://railway.app/new/starters/nextjs-prisma)
  - [Render](https://render.com/docs/deploy-nextjs-app)
  
- Static only (next export)
  - [Azure Static Web Apps](https://docs.microsoft.com/en-us/azure/static-web-apps/deploy-nextjs)
  - [Cloudflare Pages](https://developers.cloudflare.com/pages/framework-guides/deploy-a-nextjs-site/)
  - [Firebase](https://github.com/vercel/next.js/tree/canary/examples/with-firebase-hosting)
  - [GitHub Pages](https://github.com/vercel/next.js/tree/canary/examples/github-pages)

**Testing**

- [Next.js with Cypress](https://github.com/vercel/next.js/tree/canary/examples/with-cypress)
- [Next.js with Playwright](https://github.com/vercel/next.js/tree/canary/examples/with-playwright)
- [Next.js with Jest and React Testing Library](https://github.com/vercel/next.js/tree/canary/examples/with-jest)
- [Next.js with Vitest](https://github.com/vercel/next.js/tree/canary/examples/with-vitest)


### API REFERENCE
- [CLI](https://nextjs.org/docs/api-reference/cli)
- [Create Next App](https://nextjs.org/docs/api-reference/create-next-app)
- [next/router](https://nextjs.org/docs/api-reference/next/router)
- [next/link](https://nextjs.org/docs/api-reference/next/link)
- [next/image](https://nextjs.org/docs/api-reference/next/image)
- [next/script](https://nextjs.org/docs/api-reference/next/script)
- [next/head](https://nextjs.org/docs/api-reference/next/head)
- [next/amp](https://nextjs.org/docs/api-reference/next/amp)
- [next/server](https://nextjs.org/docs/api-reference/next/server)
- [next/streaming](https://nextjs.org/docs/api-reference/next/streaming)
- [next/future/image (experimental)](https://nextjs.org/docs/api-reference/next/future/image)
- [Edge Runtime](https://nextjs.org/docs/api-reference/edge-runtime)
- [Data Fetching](https://nextjs.org/docs/api-reference/data-fetching/get-initial-props)
- [Static Optimization Indicator](https://nextjs.org/docs/api-reference/next.config.js/static-optimization-indicator)
- [next.config.js](https://nextjs.org/docs/api-reference/next.config.js/introduction)

### ADVANCED (1 days)
- Advanced features
- Next.js compiler
- Preview mode
- Dynamic import
- Automatic Static Optimization
- Static HTML Export
- Absolute Imports and Module Path Aliases
- Using MDX
- AMP Support
- Customizing Babel Config
- Customizing PostCSS Config
- Custom Server
- Custom `App`
- Custom `Document`
- Custom Error Page
- `src` Directory
- CI Build Caching
- Multi Zones
- Measuring performance
- Middleware
- Debugging
- Error Handling
- Source Maps
- Codemods
- Internationalized Routing
- Output File Tracing
- Security Headers

**Upgrade & Migration**

- Upgrade React version
- Upgrade Next.js version
- SWC replacement
- Migrating to Next.js
  - Incrementally Adopting Next.js
  - Migrating from Gatsby
  - Migrating from Create React App
  - Migrating from React Router

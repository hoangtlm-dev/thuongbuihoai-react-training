## Testing

### Cypress

- `Cypress` is a test runner used for **End-to-End (E2E)** and **Integration Testing**.

### Quickstart

- You can use `create-next-app` with the `with-cypress` example to quickly get started.

```
  npx create-next-app@latest --example with-cypress with-cypress-app
```

### Manual setup

```
  pnpm install --save-dev cypress
```

- The package.json scripts field: `"cypress": "cypress open"`

### Creating your first Cypress integration test

- Config

```
  // cypress/tsconfig.json
  {
    "compilerOptions": {
      "target": "es5",
      "lib": ["es5", "dom"],
      "types": ["cypress", "node"],
    },
    "include": ["**/*.ts"]
  }

  // tsconfig.json
  "types": ["cypress", "node"],
```

### Running your Cypress tests

- Since Cypress is testing a real Next.js application, it requires the Next.js server to be running prior to starting Cypress

```
  pnpm run build
  pnpm run start
  pnpm run cypress
```

### Playwright

- Playwright is a testing framework that lets you automate Chromium, Firefox, and WebKit with a single API
- Can use it to write End-to-End (E2E) and Integration tests across all platforms.

#### Manual setup

```
  pnpm install --save-dev @playwright/test
```

- package.json: `"test:e2e": "playwright test"`

### Jest and React Testing Library

- Jest and React Testing Library are frequently used together for **Unit Testing**

#### Setting up Jest (with the Rust Compiler)

```
  pnpm install --save-dev jest jest-environment-jsdom @testing-library/react @testing-library/jest-dom
```

**Handling stylesheets and image imports**

```
  // __mocks__/styleMock.js
  module.exports = {}

  // __mocks__/fileMock.js
  module.exports = "test-file-stub";
```

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

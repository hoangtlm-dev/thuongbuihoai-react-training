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

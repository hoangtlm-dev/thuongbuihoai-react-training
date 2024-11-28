## Built-In CSS Support

### Adding a Global Stylesheet

```
  // pages/_app.tsx
  import "../styles/style.css";

  function MyApp({ Component, pageProps }: AppProps) {
    return <Component {...pageProps} />;
  }
```

### Import styles from node_modules

```
  // pages/_app.tsx
  import 'bootstrap/dist/css/bootstrap.css'

  export default function MyApp({ Component, pageProps }) {
    return <Component {...pageProps} />
  }
```

### Adding Component-Level CSS

```
  // styles/profile-swr.module.css
  .heading {
    color: red;
  }

  // profile-swr.tsx
  import style from "../styles/profile-swr.module.css";
  <div className={style.heading}>
    {data?.map((item) => <h1 key={item.id}>{item.content}</h1>)}
  </div>
```

### Sass Support

- You can use component-level Sass via CSS Modules and the `.module.scss` or `.module.sass` extension.

```
  pnpm install --save-dev sass
```

### Customizing Sass Options

- If you want to configure the Sass compiler you can do so by using `sassOptions` in `next.config.js`.

```
const path = require('path')

module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
}
```

### Sass Variables

- Next.js supports Sass variables exported from CSS Module files

```
  /* variables.module.scss */
  $primary-color: #64ff00;

  :export {
    primaryColor: $primary-color;
  }

  // pages/_app.js
  import variables from '../styles/variables.module.scss'

  export default function MyApp({ Component, pageProps }) {
    return (
      <Layout color={variables.primaryColor}>
        <Component {...pageProps} />
      </Layout>
    )
  }
```

### CSS-in-JS

- The simplest one is `inline styles`

```
  function HiThere() {
    return <p style={{ color: 'red' }}>hi there</p>
  }

  export default HiThere
```

- `styled-jsx` The aim is to support `shadow CSS` similar to Web Components.

```
function HelloWorld() {
  return (
    <div>
      Hello world
      <p>scoped!</p>
      <style jsx>{`
        p {
          color: blue;
        }
        div {
          background: red;
        }
        @media (max-width: 600px) {
          div {
            background: blue;
          }
        }
      `}</style>
      <style global jsx>{`
        body {
          background: black;
        }
      `}</style>
    </div>
  )
}

export default HelloWorld
```

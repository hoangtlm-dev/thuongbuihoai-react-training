### Usage

```
import Script from 'next/script'
```

### Strategy

- you decide when to load your third-party script by using the strategy property:

```
  <Script src="https://connect.facebook.net/en_US/sdk.js" strategy="lazyOnload" />
```

- There are three different loading strategies that can be used:

  - **beforeInteractive**: This strategy only works inside \_document.js and is designed to load scripts that are needed by the entire site
  - **afterInteractive**: strategy are injected client-side and will run after Next.js hydrates the page
  - **lazyOnload**: This strategy should be used for background or low priority scripts that do not need to load before or immediately after a page becomes interactive
  - **worker**: (experimental) Load in a web worker

### Inline Scripts

```
  <Script id="show-banner" strategy="lazyOnload">
    {`document.getElementById('banner').classList.remove('hidden')`}
  </Script>
```

### Executing Code After Loading (onLoad)

- **Note**: `onLoad` and `onError` cannot be used with the `beforeInteractive` loading strategy.

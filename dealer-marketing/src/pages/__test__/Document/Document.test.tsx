import { render } from "@testing-library/react";
import { HtmlContext, HtmlProps } from "next/dist/shared/lib/html-context";
import Document from "@pages/_document";

const mockContextValue: HtmlProps = {
  inAmpMode: true,
  docComponentsRendered: {},
  locale: "",
  scriptLoader: {},
  __NEXT_DATA__: {
    props: {},
    page: "",
    query: {},
    buildId: "",
    assetPrefix: "",
    runtimeConfig: {},
    nextExport: true,
    autoExport: false,
    rsc: true,
  },
  ampPath: "",
  buildManifest: {
    devFiles: [""],
    ampDevFiles: [""],
    polyfillFiles: [""],
    lowPriorityFiles: [""],
    rootMainFiles: [""],
    pages: {
      "/_app": [""],
    },
    ampFirstPages: [""],
  },
  canonicalBase: "",
  dangerousAsPath: "",
  devOnlyCacheBusterQueryString: "",
  dynamicImports: [],
  headTags: [],
  hybridAmp: true,
  isDevelopment: true,
  assetPrefix: "",
  crossOrigin: "",
  disableOptimizedLoading: true,
  hasConcurrentFeatures: true,
  head: [],
  largePageDataBytes: 1234,
  nextScriptWorkers: true,
  optimizeCss: true,
  optimizeFonts: true,
  styles: "",
  unstable_JsPreload: false,
  unstable_runtimeJS: false,
};

describe("<MyDocument />", () => {
  test("should render without errors", async () => {
    render(
      <HtmlContext.Provider value={mockContextValue}>
        <Document />
      </HtmlContext.Provider>,
    );
  });
});

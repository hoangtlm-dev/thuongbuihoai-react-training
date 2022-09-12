import type { AppProps } from "next/app";
import { BlogProvider } from "@context/BlogContext";
import { ExpertProvider } from "@context/ExpertContext";
import { ErrorBoundary } from "@components/common";
import "../styles/main.css";

const MyApp = ({ Component, pageProps }: AppProps) => (
  <ErrorBoundary>
    <BlogProvider>
      <ExpertProvider>
        <Component {...pageProps} />
      </ExpertProvider>
    </BlogProvider>
  </ErrorBoundary>
);

export default MyApp;

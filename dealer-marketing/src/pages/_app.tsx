import type { AppProps } from "next/app";
import { BlogProvider } from "@context/BlogContext";
import "../styles/main.css";
import { ExpertProvider } from "@context/ExpertContext";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <BlogProvider>
      <ExpertProvider>
        <Component {...pageProps} />
      </ExpertProvider>
    </BlogProvider>
  );
}

export default MyApp;

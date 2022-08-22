import type { AppProps } from "next/app";
import { BlogProvider } from "@context/BlogContext";
import { ExpertProvider } from "@context/ExpertContext";
import "../styles/main.css";

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

import type { AppProps } from "next/app";
import { DataProvider } from "@context/DataContext";
import "../styles/main.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <DataProvider>
      <Component {...pageProps} />
    </DataProvider>
  );
}

export default MyApp;

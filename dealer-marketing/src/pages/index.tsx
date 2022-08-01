import type { NextPage } from "next";
import Head from "next/head";
import Header from "@src/components/common/Header/Header";
import Navigation from "@src/components/common/Navigation/Navigation";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Dealer Marketing</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header />
        <Navigation />
      </main>
    </div>
  );
};

export default Home;

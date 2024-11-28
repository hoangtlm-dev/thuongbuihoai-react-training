import Head from "next/head";
import React from "react";
import Footer from "./Footer";
import Header from "./Header";

interface LayoutProps {
  children?: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Head>
        <title>Dealer Marketing</title>
      </Head>
      <main data-testid="layout">
        <Header />
        {children}
        <Footer />
      </main>
    </>
  );
};

export default Layout;

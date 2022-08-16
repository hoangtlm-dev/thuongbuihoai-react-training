import Head from "next/head";
import Script from "next/script";
import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import { jsonLinkingData } from "../constants/linkingData";

interface LayoutProps {
  children?: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <main>
        <Header />
        {children}
        <Footer />
      </main>
    </>
  );
};

export default Layout;

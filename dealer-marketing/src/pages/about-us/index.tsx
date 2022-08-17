import React from "react";
// sections
import AboutSection from "@sections/AboutSection";

// components
import { Banner, Navigation } from "@components/common";
import Layout from "@layouts";
import { IMAGE } from "@constants/image";

const AboutPage = () => (
  <Layout>
    <Navigation />
    <Banner url={IMAGE.bannerUrl} text="About Us" />
    <AboutSection />
  </Layout>
);

export default AboutPage;

import React from "react";
// sections
import AboutSection from "@sections/AboutSection";

// components
import { Banner, Navigation } from "@components/common";
import Layout from "@layouts";

const AboutPage = () => (
  <Layout>
    <Navigation />
    <Banner url="/images/backgrounds/bg-oto.jpg" text="About Us" />
    <AboutSection />
  </Layout>
);

export default AboutPage;

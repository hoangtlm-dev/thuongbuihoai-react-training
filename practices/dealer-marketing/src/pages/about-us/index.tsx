import React, { lazy, Suspense } from "react";
// sections
const AboutSection = lazy(() => import("@sections/AboutSection"));

// components
import { Loader } from "@components/common";
const Banner = lazy(() => import("@components/common/Banner"));
const Navigation = lazy(() => import("@components/common/Navigation"));

// layouts
import Layout from "@layouts/index";

// constants
import { IMAGE } from "@constants/image";

const AboutPage = () => (
  <Layout>
    <Suspense fallback={<Loader />}>
      <Navigation />
    </Suspense>
    <Suspense fallback={<Loader />}>
      <Banner url={IMAGE.bannerUrl} text="About Us" />
    </Suspense>
    <Suspense fallback={<Loader />}>
      <AboutSection />
    </Suspense>
  </Layout>
);

export default AboutPage;

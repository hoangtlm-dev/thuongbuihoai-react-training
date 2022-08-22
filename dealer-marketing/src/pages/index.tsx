import type { NextPage } from "next";
import { lazy, Suspense, useContext, useEffect } from "react";

// components
const Banner = lazy(() => import("@components/common/Banner"));
const Navigation = lazy(() => import("@components/common/Navigation"));
const MainSection = lazy(() => import("@sections/MainSection"));
import { Loader } from "@components/common";

// common-types
import { Blog } from "@common-types/blog";

import { IMAGE } from "@constants/image";
import { BlogContext } from "@context/BlogContext";
import { BLOG_RESPONSE_DATA } from "@api-backup/blogResponseData";
import Layout from "@layouts";

interface HomeProps {
  blogs: Blog[];
  errorCode: string;
}

export const getStaticProps = async () => {
  try {
    const blogs: Blog[] = BLOG_RESPONSE_DATA;
    return {
      props: {
        blogs: blogs,
        errorCode: "",
      },
    };
  } catch (errorCode) {
    return {
      props: {
        blogs: [],
        errorCode: errorCode,
      },
    };
  }
};

const Home: NextPage<HomeProps> = ({ blogs, errorCode }) => {
  const { handleUpdateBlogs } = useContext(BlogContext);
  useEffect(() => {
    handleUpdateBlogs(errorCode, blogs);
  }, []);

  return (
    <Layout>
      <Suspense fallback={<Loader />}>
        <Navigation />
        <Banner
          url={IMAGE.url}
          text="Expert Automotive Knowledge at Your Fingertips"
        />
        <MainSection />
      </Suspense>
    </Layout>
  );
};

export default Home;

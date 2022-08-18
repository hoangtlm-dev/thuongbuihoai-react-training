import type { NextPage } from "next";
import { useContext, useEffect } from "react";

// components
import { Banner, Navigation } from "@components/common";

// common-types
import { Blog } from "@common-types/blog";

import { IMAGE } from "@constants/image";
import { BlogContext } from "@context/BlogContext";
import { BLOG_RESPONSE_DATA } from "@api-backup/blogResponseData";
import MainSection from "@sections/MainSection";
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
      <Navigation />
      <Banner
        url={IMAGE.url}
        text="Expert Automotive Knowledge at Your Fingertips"
      />
      <MainSection />
    </Layout>
  );
};

export default Home;
